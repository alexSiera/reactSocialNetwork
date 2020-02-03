import React from 'react';
import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {getSidebarData} from "../../../Redux/selectors/sidebarSelectors";

const mapStateToProps = ({sidebarData}) => ({sidebarData: getSidebarData(sidebarData)});

const SidebarContainer = connect(mapStateToProps, null)(Sidebar)
export default SidebarContainer;