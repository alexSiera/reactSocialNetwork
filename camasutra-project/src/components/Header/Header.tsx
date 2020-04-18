import React from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
export type PropsType = {
    isAuth: boolean;
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void;
    logOut: () => void;
};
const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src="https://logomaster.ai/static/media/gallery002.936afb9d.png" alt="logo" />
            <div className={s.loginBlock}>
                {!props.isAuth ? (
                    <Link to={'/login'}>Login</Link>
                ) : (
                    <span>
                        {props.login} <a onClick={props.logOut}>Logout</a>
                    </span>
                )}
            </div>
        </header>
    );
};
export default Header;
