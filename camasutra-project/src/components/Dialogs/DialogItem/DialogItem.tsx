import React from 'react';
import s from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';
type PropsType = {
    linkText: string;
    id: string | undefined;
};
const DialogItem: React.FC<PropsType> = ({ linkText, id }) => {
    const path = '/dialogs/' + id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink id={id} to={path}>
                {linkText}
            </NavLink>
        </div>
    );
};
export default DialogItem;
