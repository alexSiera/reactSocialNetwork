import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogsDatas.map((el) => {
                    return <DialogItem id={el.id} linkText={el.name} />
                })}
            </div>
            <div className={s.messages}>
                {props.messagesDatas.map((el) => {
                    return <Message id={el.id} message={el.message} likesCount={el.likesCount}/>
                })}
            </div>
        </div>
    )
}
export default Dialogs;