import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const textAreaElement = React.createRef();
const onTextAreaSubmit = () => {
    const {value } = textAreaElement.current;
    alert(value)
}
const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogsDatas.map((el) => {
                    return <DialogItem id={el.id} linkText={el.name} />
                })}
            </div>
            <div className={s.messages}>
                {props.messagesDatas.map((el) => {
                    return <Message id={el.id} message={el.message} likesCount={el.likesCount}/>
                })}
            </div>
            <div className={s.textAreaInput}>
                <h4>Please Write Your Message</h4>
                <textarea ref={textAreaElement}></textarea>
                <button onClick={onTextAreaSubmit}>Submit Message</button>
            </div>
        </div>
    )
}
export default Dialogs;