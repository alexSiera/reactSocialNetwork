import React from 'react';
import s from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer postsData={props.postsData} dispatch={props.dispatch} textAreaValue={props.textAreaValue}/>
        </div>
    )
}
export default Profile;