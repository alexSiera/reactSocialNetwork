import React from 'react';
import s from './MyPosts.module.scss';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const updateNewPostText = (text) => {
        props.dispatch(updatePostActionCreator(text));
    }
    return (
        <MyPosts postsData={props.postsData} textAreaValue={props.textAreaValue} addPost={addPost} updateNewPostText={updateNewPostText} />
    )
}
export default MyPostsContainer;