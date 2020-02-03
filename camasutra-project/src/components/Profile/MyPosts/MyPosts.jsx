import React from 'react';
import Post from './Post/Post';
import MyPostsForm from "./MyPostsForm/MyPostsForm";
import styled from 'styled-components';

const PostsBlock = styled.div`
    padding: 10px;
`;
const PostsBlockText = styled.div`
    margin: 20px 0;
`;
const MyPosts = React.memo(({posts, addPost}) => {
    const postsElements = posts.map((p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>));
    const onAddPost = (formData) => {
        addPost(formData.textbox);
    };

    return (
        <PostsBlock>
            <h3>My post</h3>
            <PostsBlockText>
                <MyPostsForm onSubmit={onAddPost}/>
            </PostsBlockText>
            <div>
                {postsElements}
            </div>
        </PostsBlock>
    )
});
export default MyPosts;