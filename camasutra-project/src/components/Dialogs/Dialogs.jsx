import React from 'react';
import s from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogsDatas.map((el) => {
                    return <DialogItem id={el.id} linkText={el.name} />
                })}
                {/*<DialogItem linkText={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                {/*<DialogItem linkText={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                {/*<DialogItem linkText={dialogsData[3].name} id={dialogsData[3].id}/>*/}

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