import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'


const DialogsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <h4>Please Write Your Message</h4>
            <Field component={"textarea"} placeholder={"Enter Message"} name={"messageText"}></Field>
            <button>Submit Message</button>
        </form>
        )
}
const DialogsReduxForm = reduxForm({
    form: 'dialogs'
})(DialogsForm);
const Dialogs = (props) => {
    const onDialogTextAreaSubmit = ({messageText}) => {
        props.dialogTextAreaSubmit(messageText);
    }
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
                <DialogsReduxForm onSubmit={onDialogTextAreaSubmit}/>
            </div>
        </div>
    )
}
export default Dialogs;