import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
                    return <DialogItem id={el.id} linkText={el.name} />
                })}
            </div>
            <div>
                {props.dialogsPage.messagesData.map((el) => {
                    return <Message id={el.id} message={el.message} likesCount={el.likesCount}/>
                })}
            </div>
            <div className={s.textAreaInput}>
                <h4>Please Write Your Message</h4>
                <textarea onChange={onDialogChange} value={props.dialogsPage.dialogTextAreaValue}></textarea>
                <button onClick={onDialogTextAreaSubmit}>Submit Message</button>
            </div>
        </div>
    )
}
export default Dialogs;