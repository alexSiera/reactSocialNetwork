import React from 'react';
import s from './Header.module.scss';
import logo from '../../assets/images/logoTransparent.png';
import InputBase from '@material-ui/core/InputBase';
import {NavLink} from "react-router-dom";
import PrimarySearchAppBar from "./appBar/appBar";

const Header = (props) => {
    return (
        <header className={s.header}>
        <PrimarySearchAppBar isAuth={props.isAuth} login={props.login}>
                <div className={s.loginBlock}>
                    {!props.isAuth ? <NavLink to={'/login'}>Login</NavLink>: props.login }
                </div>
       </PrimarySearchAppBar>
        </header>

    )
}
export default Header;