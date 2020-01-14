import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {getUserProfileThunkCreator} from "../../Redux/reducers/profileReducer";
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
class ProfileContainer extends Component {
    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId);
        if(!userId) userId = 2;
        this.props.getUserProfile(userId)
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
const mapStateToPropsForRedirect = state => ({isAuth: state.auth.isAuth});
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);


// const AuthRedirectComponent  = connect(mapStateToPropsForRedirect)(withAuthRedirect);
const mapStateToProps = state => ({profileData: state.profilePage.profileData});

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator}) (WithUrlDataContainerComponent);