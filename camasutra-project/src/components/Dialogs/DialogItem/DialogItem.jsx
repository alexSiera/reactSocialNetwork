import React from 'react';
import {NavLink} from "react-router-dom";

const DialogItem = ({linkText, id}) => {
    let path = '/dialogs/' + id;
    return (
        <div>
            <NavLink id={id} to={path}>{linkText}</NavLink>
        </div>
    )
}
export default DialogItem;