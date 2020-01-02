import React from 'react';
import s from './Sidebar.module.scss'
import SidebarItem from "./Sidebar-item/SidebarItem";
const Sidebar = ({sidebarData}) => {
    return (
        <div>
            <h1 className={s.sidebarMainHeading}>Friends</h1>
            <div className={s.sidebarItemsContainer}>
                {sidebarData.map((el) => {
                    return <SidebarItem name={el.name} img={el.img} id={el.id} />
                })}
            </div>
        </div>
    )
}
export default Sidebar;