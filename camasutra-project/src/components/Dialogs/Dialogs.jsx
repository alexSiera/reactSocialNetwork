import React from 'react';
import s from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";
const DialogItem = ({linkText, id}) => {
    let path = '/dialogs/' + id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{linkText}</NavLink>
        </div>
    )
}
const Message = ({message}) => {
    return (
        <div className={s.dialog}>{message}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs} >
            <div className={s.dialogs_items}>
                <DialogItem linkText="Dimych" id="1" />
                <DialogItem linkText="Alex" id="2"  />
                <DialogItem linkText="Anya" id="3"  />
                <DialogItem linkText="Killer" id="4"  />

            </div>
            <div className={s.messages}>
                <Message message="Ok!" />
                <Message message="Ok 2!" />
                <Message message="Ok 3!" />

            </div>
        </div>
    )
}
export default Dialogs;