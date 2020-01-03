import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    console.log("PROFILE PROPSSSS", props)
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} addPost={props.addPost} textAreaValue={props.textAreaValue} onChange={props.onChange}/>
        </div>
    )
}
export default Profile;