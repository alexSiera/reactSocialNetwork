import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.scss';

type PropsType = {
  linkText: string;
  id: number | string | undefined;
};
const DialogItem: React.FC<PropsType> = ({ linkText, id }) => {
  const path = `/dialogs/${id}`;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink id={id as string | undefined} to={path}>
        {linkText}
      </NavLink>
    </div>
  );
};
export default DialogItem;
