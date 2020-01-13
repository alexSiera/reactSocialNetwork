import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));
const MyPosts = ({posts, textAreaValue, addPost, updateNewPostText}) => {
    const classes = useStyles();
    const postsElements = posts.map((p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>))
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
                    <TextareaAutosize onChange={onUpdatePostValue} value={textAreaValue}
                                      aria-label="empty textarea" rowsMin={3}
                    />
                </div>
                <div>
                    <Button onClick={onAddPost} variant="contained"
                            color="primary" className={classes.button}
                            endIcon={<Icon>send</Icon>}>Add post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;