import React from 'react';
import classes from'./Header.module.scss';
import s from './Header.module.scss'
const Header = () => {
    return (
        <header className={`${s.header} ${s.as}`}>
            <img src="https://logomaster.ai/static/media/gallery002.936afb9d.png" />
        </header>
    )
}
export default Header;