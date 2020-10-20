import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions, InitialStateType } from '../../Redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { getDialogsPage } from '../../Redux/selectors/dialogsSelectors';
import { AppStateType } from '../../Redux/reduxStore';

type MapStatePropsType = {
  dialogsPage: InitialStateType;
};
type MapDispatchPropsType = {
  dialogTextAreaSubmit: (newMessage: string) => void;
};
type OwnType = {
  isAuth: boolean;
};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnType;
const DialogsContainer: React.FC<PropsType> = (props) => {
  return (
    <Dialogs
      {...props}
      isAuth={props.isAuth}
      dialogTextAreaSubmit={props.dialogTextAreaSubmit}
      dialogsPage={props.dialogsPage}
    />
  );
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  dialogsPage: getDialogsPage(state.dialogsPage),
});
export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnType, AppStateType>(mapStateToProps, {
    dialogTextAreaSubmit: actions.addDialogAC,
  }),
  withAuthRedirect,
)(DialogsContainer) as React.FC;
