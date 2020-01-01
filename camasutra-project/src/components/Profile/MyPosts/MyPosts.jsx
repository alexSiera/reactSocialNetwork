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
          <Post />
          <Post />

          <Post />

      </div>
      </div>
    )
}
export default MyPosts;