import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, setUserStatusAC,
    updateStatusThunkCreator
} from "../../Redux/reducers/profileReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
class ProfileContainer extends Component {
    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId);
        if(!userId ) userId = this.props.autorizedUid;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);

    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData,
        status: state.profilePage.status,
        autorizedUid: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
export default compose(
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator, getUserStatus: getUserStatusThunkCreator, updateUserStatus: updateStatusThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);