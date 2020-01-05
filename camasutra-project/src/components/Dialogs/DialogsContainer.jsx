import React from 'react';
import {addDialogActionCreator, updateDialogActionCreator} from "../../Redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState();
    const {dialogsPage} = state;
    const dispatch = props.store.dispatch;
    const dialogTextAreaSubmit = () => {
        dispatch(addDialogActionCreator());
    }
    const dialogChange = (value) => {
        dispatch(updateDialogActionCreator(value));
    }

    return (
       <Dialogs messagesData = {dialogsPage.messagesData} dialogsData={dialogsPage.dialogsData} dialogTextAreaSubmit={dialogTextAreaSubmit} dialogChange={dialogChange} dialogTextAreaValue={dialogsPage.textAreaValue}/>
    )
}
export default DialogsContainer;