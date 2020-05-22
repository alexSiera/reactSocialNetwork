import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import DialogsForm from './DialogsForm/DialogsForm';
import { AppStateType } from '../../Redux/reduxStore';
type PropsType = {
    isAuth: boolean;
    dialogTextAreaSubmit: (messageText: string) => void;
    dialogsPage: any;
};
const Dialogs: React.FC<PropsType> = (props) => {
    const onDialogTextAreaSubmit = (d: { messageText: string }): void => {
        props.dialogTextAreaSubmit(d.messageText);
    };
    if (!props.isAuth) return <Redirect to={'/login'} />;
    return (
        <div className={s.dialogs}>
            <div>
                {props.dialogsPage.dialogsData.map((el: any) => {
                    return <DialogItem id={el.id} key={el.id} linkText={el.name} />;
                })}
            </div>
            <div>
                {props.dialogsPage.messagesData.map((el: any) => {
                    return <Message key={el.id} message={el.message} likesCount={el.likesCount} />;
                })}
            </div>
            <div className={s.textAreaInput}>
                <DialogsForm onSubmit={onDialogTextAreaSubmit as any} handleSubmit={() => null} />
            </div>
        </div>
    );
};
export default Dialogs;
