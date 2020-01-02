import React from 'react';
import s from'./Navbar.module.scss';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = ({sidebarData}) => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>News </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>

            <div className={s.item}>
                <Sidebar sidebarData={sidebarData} />
            </div>
      </nav>
    )
}
export default Navbar;