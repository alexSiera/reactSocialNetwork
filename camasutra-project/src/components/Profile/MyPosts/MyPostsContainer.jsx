import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC} from "../../../Redux/reducers/profile/actions";
const MyPostsContainer = (props) => {
  return <MyPosts {...props} />
};

const mapStateToProps = state => state.profilePage;
export default connect(mapStateToProps, {
    addPost: addPostAC,
})(MyPostsContainer);