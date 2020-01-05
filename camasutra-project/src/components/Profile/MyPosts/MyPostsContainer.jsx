import React from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/reducers/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const state = props.store.getState();
    const dispatch = props.store.dispatch;
    const {posts, textAreaValue} = state.profilePage;
    const addPost = () => {
        dispatch(addPostActionCreator());
    }
    const updateNewPostText = (text) => {
        dispatch(updatePostActionCreator(text));
    }
    return (
        <MyPosts postsData={posts} textAreaValue={textAreaValue} addPost={addPost} updateNewPostText={updateNewPostText} />
    )
}
export default MyPostsContainer;