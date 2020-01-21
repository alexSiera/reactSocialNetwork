import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateStatusThunkCreator
} from "../../Redux/reducers/profileReducer";
// import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
const ProfileContainerWithHooks = (props) => {
    useEffect(() => {
        let userId = parseInt(props.match.params.userId);
        if(!userId ) {
            userId = props.autorizedUid;
            if(!userId) {
                props.history.push("/login");
            }
        }
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, []);
        return (
            <Profile {...props} />
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
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator, getUserStatus: getUserStatusThunkCreator, updateUserStatus: updateStatusThunkCreator}),
    withRouter,
    //withAuthRedirect
)(ProfileContainerWithHooks);