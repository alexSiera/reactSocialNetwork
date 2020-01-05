import React from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                const state = store.getState();
                const dispatch = store.dispatch;
                const addPost = () => {
                    dispatch(addPostActionCreator());
                }
                const updateNewPostText = (text) => {
                    dispatch(updatePostActionCreator(text));
                }
                return <MyPosts postsData={state.profilePage.posts}
                                textAreaValue={state.profilePage.textAreaValue}
                                addPost={addPost}
                                updateNewPostText={updateNewPostText}
                />
            }
        }

        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;