import React from 'react';
import {addDialogAC as dialogTextAreaSubmit , updateDialogAC as dialogChange} from "../../Redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, {
    dialogTextAreaSubmit,
    dialogChange
})(Dialogs);

export default DialogsContainer;