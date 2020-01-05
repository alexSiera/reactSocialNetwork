import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.postsData.map((p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />))
    const addPost = () => {
        props.addPost();
    }
    const changePostValue = (e) => {
        props.updateNewPostText(e.target.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div className={s.postsBlockText}>
                <div>
                    <textarea onChange={changePostValue} value={props.textAreaValue}>

                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;