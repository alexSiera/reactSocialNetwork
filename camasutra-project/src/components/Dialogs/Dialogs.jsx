import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const textAreaElement = React.createRef();

const Dialogs = (props) => {
    const onDialogTextAreaSubmit = () => {
        props.dispatch(props.addDialogActionCreator());
    }
    const onDialogChange = (e) => {
        props.dispatch(props.updateDialogActionCreator(e.target.value));
    }

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
                <textarea onChange={onDialogChange} ref={textAreaElement} value={props.dialogTextAreaValue}></textarea>
                <button onClick={onDialogTextAreaSubmit}>Submit Message</button>
            </div>
        </div>
    )
}
export default Dialogs;