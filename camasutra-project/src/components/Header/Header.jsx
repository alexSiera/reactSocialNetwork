import React from 'react';
import s from './Header.module.scss';
    import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://logomaster.ai/static/media/gallery002.936afb9d.png" />
            <div className={s.loginBlock}>
                {!props.isAuth ? <Link to={'/login'}>Login</Link>: props.login }
            </div>
        </header>
    )
}
export default Header;