import React from 'react';
import {addDialogAC as dialogTextAreaSubmit , updateDialogAC as dialogChange} from "../../Redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
export default compose(
    connect(mapStateToProps, {
        dialogTextAreaSubmit,
        dialogChange
    }),
    withAuthRedirect
)(Dialogs);