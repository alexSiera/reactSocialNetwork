import React from 'react';
import {addDialogActionCreator, updateDialogActionCreator} from "../../Redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dialogTextAreaSubmit: () => {
            dispatch(addDialogActionCreator());

        },
        dialogChange: (newValue) => {
            dispatch(updateDialogActionCreator(newValue));
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;