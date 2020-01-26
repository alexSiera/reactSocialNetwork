import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, savePhotoThunkCreator, saveProfileDataThunkCreator,
    updateStatusThunkCreator
} from "../../Redux/reducers/profileReducer";
import {compose} from "redux";
import {getProfileData, getProfileUpdateStatus, getStatus} from "../../Redux/selectors/profileSelectors";
import {getIsAuth, getUserId} from "../../Redux/selectors/authSelectors";

const ProfileContainer = (props) => {
    const refreshProfile = () => {
        let userId = parseInt(props.match.params.userId);
        if (!userId) {
            userId = props.autorizedUid;
            if (!userId) {
                props.history.push("/login");
            }
        }
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    };
    useEffect(() => {
        refreshProfile();
    }, [props.match.params.userId]);
    return (
        <Profile {...props} isOwner={!props.match.params.userId} />
    )
}
const mapStateToProps = ({profilePage, auth}) => {
    return {
        profileData: getProfileData(profilePage),
        status: getStatus(profilePage),
        profileUpdateStatusSuccess: getProfileUpdateStatus(profilePage),
        autorizedUid: getUserId(auth),
        isAuth: getIsAuth(auth),
    }
}
export default compose(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileThunkCreator,
        getUserStatus: getUserStatusThunkCreator,
        updateUserStatus: updateStatusThunkCreator,
        savePhoto: savePhotoThunkCreator,
        saveProfileData: saveProfileDataThunkCreator
    }),
    withRouter,
)(ProfileContainer);