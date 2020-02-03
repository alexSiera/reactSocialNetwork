import React from 'react';
import {NavLink} from "react-router-dom";
import SidebarContainer from "./Sidebar/SidebarContainer";
import NavbarMaterial from "./NavbarMaterial";
import styled from 'styled-components';

const Nav = styled.nav` 
    grid-area: nav;
    background-color: burlywood;
    padding: 20px;
`;
const Item = styled.div`
    a {
        color: white;
        text-decoration: none;
    &.active {
            color: gold;
        }
    }
`;

const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({
    activeClassName: activeClassName,
})`
  &.${activeClassName} {
    color: blue;
  }
`;
const Navbar = () => {
    return (
        // <div></div>
        // <NavbarMaterial />
        <Nav>
            <Item>
                <StyledNavLink to="/profile" activeClassName={activeClassName}>Profile</StyledNavLink>
            </Item>
            <Item>
                <NavLink to="/dialogs" activeClassName={activeClassName}>Messages</NavLink>
            </Item>
            <Item>
                <NavLink to="/news" activeClassName={activeClassName}>News </NavLink>
            </Item>
            <Item>
                <NavLink to="/music" activeClassName={activeClassName}>Music</NavLink>
            </Item>

            <Item>
                <NavLink to="/settings" activeClassName={activeClassName}>Settings</NavLink>
            </Item>
            <Item>
                <NavLink to="/users" activeClassName={activeClassName}>Users</NavLink>
            </Item>
            {/*<div className={s.item}>*/}
            {/*    <SidebarContainer/>*/}
            {/*</div>*/}
        </Nav>
    )
};
export default Navbar;