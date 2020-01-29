import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {maxLengthCreator, required} from "../../../utils/validators/valiadators.ts";
import {Textarea} from "../../Common/FormsControls/FormsControls";
const maxLength10 = maxLengthCreator(10)

const DialogsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <h4>Please Write Your Message</h4>
            <Field component={Textarea} placeholder="Enter Message" name="messageText" validate={[required,maxLength10]} />
            <button>Submit Message</button>
        </form>
        )
};
export default reduxForm({
    form: 'dialogs'
})(DialogsForm);
