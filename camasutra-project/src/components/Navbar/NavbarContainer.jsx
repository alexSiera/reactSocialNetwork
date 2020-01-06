import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        sidebarData: state.navbarData
    }
}
const mapDispatchToProps = (dispatch) => {}
// let mapDispatchToProps = (dispatch) => {
//     return;
// }
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
export default NavbarContainer;