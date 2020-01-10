import React from 'react';
import {addPostAC as addPost, updatePostAC as updateNewPostText} from "../../../Redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = state => state.profilePage

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText
})(MyPosts)
export default MyPostsContainer;