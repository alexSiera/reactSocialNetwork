import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import * as axios from 'axios';
import {setProfileAC as setProfile} from "../../Redux/reducers/profileReducer";
class ProfileContainer extends Component {
    getUsers = async userId => {
        try {
            const baseUrl = 'https://social-network.samuraijs.com/api/1.0/profile';
            if(!userId) userId = 2;
            const profile = await axios.get(`${baseUrl}/${userId}`);
            this.props.setProfile(profile.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId);
        this.getUsers(userId);
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