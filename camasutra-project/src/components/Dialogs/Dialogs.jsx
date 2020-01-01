import React from 'react';
import s from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = ({linkText, id}) => {
    let path = '/dialogs/' + id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink id={id} to={path}>{linkText}</NavLink>
        </div>
    )
}
const Message = ({message, id, likesCount}) => {
    return (
        <div className={s.dialog} id={id} >{message}</div>
    )
}
const Dialogs = (props) => {
    const dialogsData = [{
        id: 1,
        name: "Dimych"
    }, {
        id: 2,
        name: "Alex"
    }, {
        id: 3,
        name: "Anya"
    }, {
        id: 4,
        name: "Killer"
    }];
    const messagesData = [{
        id: 1,
        message: "Ok!",
        likesCount: 12,
    }, {
        id: 2,
        message: "Sure!",
        likesCount: 12,
    }, {
        id: 3,
        message: "Hi dos",
        likesCount: 12,
    }, {
        id: 4,
        message: "Killer",
        likesCount: 12,
    }];
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsData.map((el) => {
                    return <DialogItem id={el.id} linkText={el.name} />
                })}
                {/*<DialogItem linkText={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                {/*<DialogItem linkText={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                {/*<DialogItem linkText={dialogsData[3].name} id={dialogsData[3].id}/>*/}

            </div>
            <div className={s.messages}>
                {messagesData.map((el) => {
                    return <Message id={el.id} message={el.message} likesCount={el.likesCount}/>
                })}
            </div>
        </div>
    )
}
export default Dialogs;