import React from 'react';
import s from './NewsForm.scss';
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from "../../../utils/validators/valiadators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const NewsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field component={Textarea} name="newNewsText" className={s.textArea} validate={[required, maxLength10]}/>
            <button>Add news</button>
        </form>
    )
};
export default reduxForm({
    form: 'newsForm'
})(NewsForm);