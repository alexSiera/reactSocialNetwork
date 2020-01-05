import React from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {updateDialogActionCreator} from "../../../Redux/reducers/dialogsReducer";

let mapStateToProps = state => state.profilePage
let mapDispatchToProps = dispatch => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text) => dispatch(updateDialogActionCreator(text))
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;