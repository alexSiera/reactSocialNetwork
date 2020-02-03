import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import DialogsForm from "./DialogsForm/DialogsForm";
import styled from 'styled-components';

const DialogsContainer = styled.div`
    display: grid;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
`;
const TextAreaInput = styled.div`
    margin-top: 40px;
    h4{
        margin: 5px 5px;
        font-weight: normal;
        font-size: 18px;
    }
`;
const Dialogs = (props) => {
    const onDialogTextAreaSubmit = ({messageText}) => {
        props.dialogTextAreaSubmit(messageText);
    };
    if (!props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <DialogsContainer>
            <div>
                {props.dialogsPage.dialogsData.map((el) => {
                    return <DialogItem key={el.id} linkText={el.name}/>
                })}
            </div>
            <div>
                {props.dialogsPage.messagesData.map((el) => {
                    return <Message key={el.id} message={el.message} likesCount={el.likesCount}/>
                })}
            </div>
            <TextAreaInput>
                <DialogsForm onSubmit={onDialogTextAreaSubmit}/>
            </TextAreaInput>
        </DialogsContainer>
    )
}
export default Dialogs;