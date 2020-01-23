import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, savePhotoThunkCreator,
    updateStatusThunkCreator
} from "../../Redux/reducers/profileReducer";
import {compose} from "redux";

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
        <Profile {...props} isOwner={!props.match.params.userId} savePhoto={props.savePhoto} />
    )
}
const mapStateToProps = ({profilePage, auth}) => {
    return {
        profileData: profilePage.profileData,
        status: profilePage.status,
        autorizedUid: auth.userId,
        isAuth: auth.isAuth
    }
}
export default compose(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileThunkCreator,
        getUserStatus: getUserStatusThunkCreator,
        updateUserStatus: updateStatusThunkCreator,
        savePhoto: savePhotoThunkCreator
    }),
    withRouter,
)(ProfileContainer);