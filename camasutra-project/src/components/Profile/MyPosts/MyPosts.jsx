import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'

const MyPostsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field component={"textarea"} placeholder="Please Enter New Post" name={"textbox"} />
            <div>
                <button>Send Post</button>
            </div>
        </form>
        )
}
const ReduxForm = reduxForm({
    form: 'mypost'
})(MyPostsForm)
const MyPosts = ({posts,addPost }) => {
    const postsElements = posts.map((p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />))
    const onAddPost = (formData) => {
        addPost(formData.textbox);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div className={s.postsBlockText}>
                <ReduxForm onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;