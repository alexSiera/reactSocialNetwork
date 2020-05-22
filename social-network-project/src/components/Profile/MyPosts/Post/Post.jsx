import React from "react";
import s from "./Post.module.scss";
const Post = ({message,name}) => {
  return (
        <div className={s.item}>
          <img src="https://f0.pngfuel.com/png/439/19/avatar-user-profile-icon-women-wear-frock-png-clip-art.png" />
          {name} - {message}
          <div>
            <span> like</span>
            <span> dislike</span>
          </div>
        </div>
  );
};
export default Post;
