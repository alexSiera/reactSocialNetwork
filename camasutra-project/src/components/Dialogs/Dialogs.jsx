import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import DialogsForm from "./DialogsForm/DialogsForm";
const Dialogs = (props) => {
    const onDialogTextAreaSubmit = ({messageText}) => {
        props.dialogTextAreaSubmit(messageText);
    };
    if(!props.isAuth) return <Redirect to={"/login"} />
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
                <DialogsForm onSubmit={onDialogTextAreaSubmit}/>
            </div>
        </div>
    )
}
export default Dialogs;