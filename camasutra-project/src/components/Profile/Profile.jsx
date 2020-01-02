import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} addPost={props.addPost}/>
        </div>
    )
}
export default Profile;