import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from "../../../utils/validators/valiadators.ts";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import styled from 'styled-components';

const TextAreaField = styled(Field)`
    margin-top: 60px;
    margin-left: 30px;
`;
const maxLength10 = maxLengthCreator(10);
const NewsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextAreaField component={Textarea} name="newNewsText" validate={[required, maxLength10]}/>
            <button>Add news</button>
        </form>
    )
};
export default reduxForm({
    form: 'newsForm'
})(NewsForm);