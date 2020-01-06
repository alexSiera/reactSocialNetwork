import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';


const MyPosts = ({posts,textAreaValue,addPost,updateNewPostText }) => {
    const postsElements = posts.map((p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />))
    const onAddPost = () => {
        addPost();
    }
    const onUpdatePostValue = (e) => {
        updateNewPostText(e.target.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div className={s.postsBlockText}>
                <div>
                    <textarea onChange={onUpdatePostValue} value={textAreaValue}>

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