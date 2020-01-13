import React from "react";
import s from "./Post.module.scss";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
const Post = ({message, name}) => {
    return (
        <div className={s.item}>
            <img src="https://f0.pngfuel.com/png/439/19/avatar-user-profile-icon-women-wear-frock-png-clip-art.png"/>
            {name} - {message}
            <div>
                <ThumbUpIcon color='primary'>like</ThumbUpIcon>
                <ThumbDownIcon color='secondary'>dislike</ThumbDownIcon>
            </div>
        </div>
    );
};
export default Post;
