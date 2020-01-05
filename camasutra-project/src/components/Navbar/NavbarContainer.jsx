import React from 'react';
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";
import {addDialogActionCreator, updateDialogActionCreator} from "../../Redux/reducers/dialogsReducer";

const NavbarContainer = () => {
    return <StoreContext.Consumer>{
        (store) => {
            const state = store.getState();
            return <Navbar sidebarData={state.sidebarData}/>

        }
    }
    </StoreContext.Consumer>

};
export default NavbarContainer;