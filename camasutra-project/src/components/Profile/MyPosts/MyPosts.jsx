import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.postsData.map((p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />))
    const onAddPost = () => {
        props.addPost();
    }
    const onUpdatePostValue = (e) => {
        props.updateNewPostText(e.target.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div className={s.postsBlockText}>
                <div>
                    <textarea onChange={onUpdatePostValue} value={props.textAreaValue}>

                    </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;