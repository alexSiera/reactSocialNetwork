import React from 'react';
import s from './SidebarItem.module.scss'
const SidebarItem = ({name, img,id}) => {
    return (
            <li className={s.sideBarList}>
                <img className={s.sideBarImg} src={img} id={id}/>
                <div>{name}</div>
            </li>
    )
}
export default SidebarItem;