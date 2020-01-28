import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateStatusThunkCreator
} from "../../Redux/reducers/profile/profileReducer";
// import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
class ProfileContainer extends Component {
    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId);
        if(!userId ) {
            userId = this.props.autorizedUid;
            if(!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);

    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
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
)(ProfileContainer);