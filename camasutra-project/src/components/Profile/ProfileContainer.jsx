import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from 'axios';
import {setProfileAC as setProfile} from "../../Redux/reducers/profileReducer";
class ProfileContainer extends Component {
    getUsers = async () => {
        try {
            const baseUrl = 'https://social-network.samuraijs.com/api/1.0/profile';
            const profile = await axios.get(`${baseUrl}/2`);
            this.props.setProfile(profile.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (
            <Profile {...this.props} profileData={this.props.profileData}/>
        )
    }
}
const mapStateToProps = (state) => ({profileData: state.profilePage.profileData})
export default connect(mapStateToProps, {setProfile})(ProfileContainer);