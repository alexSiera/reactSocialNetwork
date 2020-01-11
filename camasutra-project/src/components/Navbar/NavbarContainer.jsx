import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        sidebarData: state.navbarData
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)
export default NavbarContainer;