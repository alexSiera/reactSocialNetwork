import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
          My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        </div>
      <div className={s.posts}>
          <Post message="Hi, how are you ?" name="post 1"/>
          <Post message="It's my first post" name="post 2"/>
      </div>
      </div>
    )
}
export default MyPosts;