import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import DialogsForm from './DialogsForm/DialogsForm';
type PropsType = {
    isAuth: boolean;
    dialogTextAreaSubmit: (messageText: string) => void;
};
const Dialogs: React.FC<PropsType> = (props) => {
    // @ts-ignore
    const onDialogTextAreaSubmit = ({ messageText }): void => {
        props.dialogTextAreaSubmit(messageText);
    };
    if (!props.isAuth) return <Redirect to={'/login'} />;
    return (
        <div className={s.dialogs}>
            <div>
                // @ts-ignore
                {props.dialogsPage.dialogsData.map((el) => {
                    return <DialogItem id={el.id} key={el.id} linkText={el.name} />;
                })}
            </div>
            <div>
                // @ts-ignore
                {props.dialogsPage.messagesData.map((el) => {
                    // @ts-ignore
                    return <Message key={el.id} message={el.message} likesCount={el.likesCount} />;
                })}
            </div>
            <div className={s.textAreaInput}>
                // @ts-ignore
                <DialogsForm onSubmit={onDialogTextAreaSubmit} />
            </div>
        </div>
    );
};
export default Dialogs;
