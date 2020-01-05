import React from 'react';
import {addDialogActionCreator, updateDialogActionCreator} from "../../Redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                const state = store.getState();
                const {dialogsPage} = state;
                const dispatch = store.dispatch;
                const dialogTextAreaSubmit = () => {
                    dispatch(addDialogActionCreator());
                }
                const dialogChange = (value) => {
                    dispatch(updateDialogActionCreator(value));
                }

                return <Dialogs
                    messagesData={dialogsPage.messagesData}
                    dialogsData={dialogsPage.dialogsData}
                    dialogTextAreaSubmit={dialogTextAreaSubmit}
                    dialogChange={dialogChange}
                    dialogTextAreaValue={dialogsPage.textAreaValue}
                />

            }
        }
        </StoreContext.Consumer>
       )
}
export default DialogsContainer;