import React from 'react';
import {addPostAC as addPost} from "../../../Redux/reducers/profile/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = state => state.profilePage;

export default connect(mapStateToProps, {
    addPost,
})(MyPosts);