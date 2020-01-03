import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} dispatch={props.dispatch} textAreaValue={props.textAreaValue} addPostActionCreator={props.addPostActionCreator} updatePostActionCreator={props.updatePostActionCreator}/>
        </div>
    )
}
export default Profile;