import React from "react";
import styled from 'styled-components';

const Item = styled.div`
    color: greenyellow;
    img {
        width: 50px;
        height: auto;
        border-radius: 30px;
    }
`;

const Post = ({message, name}) => {
    return (
        <Item>
            <img src="https://f0.pngfuel.com/png/439/19/avatar-user-profile-icon-women-wear-frock-png-clip-art.png"/>
            {name} - {message}
            <div>
                <span> like</span>
                <span> dislike</span>
            </div>
        </Item>
    );
};
export default Post;
