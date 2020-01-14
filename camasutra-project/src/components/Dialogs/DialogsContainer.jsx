import React from 'react';
import {addDialogAC as dialogTextAreaSubmit , updateDialogAC as dialogChange} from "../../Redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let AuthContainerComponent = withAuthRedirect(Dialogs);
const mapStateToRedirectProps = (state) => ({isAuth: state.auth.isAuth});
AuthContainerComponent = connect(mapStateToRedirectProps)(AuthContainerComponent);
const DialogsContainer = connect(mapStateToProps, {
    dialogTextAreaSubmit,
    dialogChange
})(AuthContainerComponent);

export default DialogsContainer;