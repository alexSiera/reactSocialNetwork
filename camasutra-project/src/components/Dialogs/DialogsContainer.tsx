import React from 'react';
import { addDialogAC as dialogTextAreaSubmit, InitialStateType } from '../../Redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { getDialogsPage } from '../../Redux/selectors/dialogsSelectors';
import { AppStateType } from '../../Redux/reduxStore';
type MapStatePropsType = {
    dialogsPage: InitialStateType;
};
type MapDispatchPropsType = {
    dialogTextAreaSubmit: () => void;
};
type OwnType = {
    isAuth: boolean;
};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnType;
const DialogsContainer: React.FC<PropsType> = (props) => {
    return <Dialogs {...props} />;
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    dialogsPage: getDialogsPage(state.dialogsPage),
});
export default compose(
    // @ts-ignore
    connect<MapStatePropsType, MapDispatchPropsType, OwnType, PropsType>(mapStateToProps, {
        dialogTextAreaSubmit,
    }),
    withAuthRedirect,
    // @ts-ignore
)(DialogsContainer);
