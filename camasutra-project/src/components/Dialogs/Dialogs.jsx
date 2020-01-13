import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const Dialogs = (props) => {
    const onDialogTextAreaSubmit = () => {
        props.dialogTextAreaSubmit();
    }
    const onDialogChange = (e) => {
        const newValue = e.target.value;
        props.dialogChange(newValue);
    }
    return (
        <div className={s.dialogs}>
            <div>

                {props.dialogsPage.dialogsData.map((el) => {
                    return <DialogItem key={el.id} linkText={el.name} />
                })}
            </div>
            <div>
                {props.dialogsPage.messagesData.map((el) => {
                    return <Message key={el.id} message={el.message} likesCount={el.likesCount}/>
                })}
            </div>
            <div className={s.textAreaInput}>
                <h4>Please Write Your Message</h4>
                <TextareaAutosize aria-label="empty textarea" rowsMin={3} onChange={onDialogChange} value={props.dialogsPage.dialogTextAreaValue} />
                <Button variant="contained" color="primary" onClick={onDialogTextAreaSubmit}>Submit Message</Button>
            </div>
        </div>
    )
}
export default Dialogs;