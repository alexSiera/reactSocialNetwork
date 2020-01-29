import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {maxLengthCreator, required} from "../../../../utils/validators/valiadators.ts";
import {Textarea} from "../../../Common/FormsControls/FormsControls";
const maxLength10 = maxLengthCreator(10);
const MyPostsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field component={Textarea} placeholder="Please Enter New Post" name="textbox" validate={[required, maxLength10]}/>
            <div>
                <button>Send Post</button>
            </div>
        </form>
        )
};
export default reduxForm({
    form: 'mypost'
})(MyPostsForm);