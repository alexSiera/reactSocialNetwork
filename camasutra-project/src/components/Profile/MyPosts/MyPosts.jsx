import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
    console.log('MYPOSTS!!!!!!',props)
    const postsElements = props.postsData.map((p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />))
    const newPostElement = React.createRef();
    // const addPost = (e) => {
    //     props.addPost(e.target.value)
    // }
    const addPost = () => {
        props.addPost(newPostElement.current.value);

    }
    const changePostValue = (e) => {
        props.onChange(e.target.value);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div className={s.postsBlockText}>
                <div>
                    <textarea ref={newPostElement} onChange={changePostValue} value={props.textAreaValue}>

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