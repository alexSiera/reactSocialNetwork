import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {setProfileAC as setProfile} from "../../Redux/reducers/profileReducer";
import {getUserProfile} from "../../api/api";
class ProfileContainer extends Component {
    componentDidMount() {
        const userId = parseInt(this.props.match.params.userId);
        getUserProfile(userId).then(profile => {
            this.props.setProfile(profile);
        });
    }
    render() {
        return (
            <Profile {...this.props} profileData={this.props.profileData}/>
        )
    }
}
const mapStateToProps = state => ({profileData: state.profilePage.profileData});

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setProfile}) (WithUrlDataContainerComponent);