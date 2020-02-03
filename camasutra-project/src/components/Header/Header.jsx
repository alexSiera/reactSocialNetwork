import React from 'react';
import PrimarySearchAppBar from "./AppBarMaterial";
import {HeaderElement} from './headerStyles'
const Header = (props) => {
    return (
        <HeaderElement>
            <PrimarySearchAppBar isAuth={props.isAuth} login={props.login} logOut={props.logOut} avatarPhoto={props.photo} isOwner={props.isOwner} />
        </HeaderElement>
    )
}
export default Header;