import React from 'react';
import s from './Sidebar.module.scss'
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => {
    return {
        sidebarData: state.sidebarData
    }
}

const SidebarContainer = connect(mapStateToProps, null)(Sidebar)
export default SidebarContainer;