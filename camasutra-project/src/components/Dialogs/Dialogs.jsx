import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import {maxLengthCreator, required} from "../../utils/validators/valiadators";
import {Textarea} from "../Common/FormsControls/FormsControls";
const maxLength10 = maxLengthCreator(10)

let DialogsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <h4>Please Write Your Message</h4>
            <Field component={Textarea} placeholder="Enter Message" name="messageText" validate={[required,maxLength10]}></Field>
            <button>Submit Message</button>
        </form>
        )
}
DialogsForm = reduxForm({
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
                <DialogsForm onSubmit={onDialogTextAreaSubmit}/>
            </div>
        </div>
    )
}
export default Dialogs;