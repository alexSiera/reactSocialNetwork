import React from 'react';
import s from './Message.module.scss';

const Message = ({message, id}) => {
    return (
        <div className={s.dialog} id={id} >{message}</div>
    )
}

export default Message;