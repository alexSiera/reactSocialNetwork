import React from 'react';
import s from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profileUpdateStatusSuccess={props.profileUpdateStatusSuccess} saveProfileData={props.saveProfileData} savePhoto={props.savePhoto} isOwner={props.isOwner} profileData={props.profileData} updateUserStatus={props.updateUserStatus} status={props.status}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;