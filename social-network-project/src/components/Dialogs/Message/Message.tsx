import React from 'react';
import s from './Message.module.scss';
type PropsType = {
    message: string;
    id?: string | undefined;
    likesCount: number;
};
const Message: React.FC<PropsType> = ({ message, id }) => {
    return (
        <div className={s.dialog} id={id}>
            {message}
        </div>
    );
};

export default Message;
