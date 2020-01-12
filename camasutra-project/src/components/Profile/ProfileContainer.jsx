import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {getUserProfileThunkCreator} from "../../Redux/reducers/profileReducer";
class ProfileContainer extends Component {
    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId);
        if(!userId) userId = 2;
        this.props.getUserProfile(userId)
    }
    render() {
        return (
            <Profile {...this.props} profileData={this.props.profileData}/>
        )
    }
}
const mapStateToProps = state => ({profileData: state.profilePage.profileData});

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator}) (WithUrlDataContainerComponent);