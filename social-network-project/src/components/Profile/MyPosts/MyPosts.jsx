import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import MyPostsForm from "./MyPostsForm/MyPostsForm";
const MyPosts = React.memo(({posts,addPost }) => {
    const postsElements = posts.map((p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />));
    const onAddPost = (formData) => {
        addPost(formData.textbox);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div className={s.postsBlockText}>
                <MyPostsForm onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});
export default MyPosts;