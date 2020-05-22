import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/valiadators';
import { Textarea } from '../../Common/FormsControls/FormsControls';
const maxLength10 = maxLengthCreator(10);
interface Props {
    handleSubmit: () => void;
}
const DialogsForm: React.FC<Props & InjectedFormProps> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h4>Please Write Your Message</h4>
            <Field
                component={Textarea}
                placeholder="Enter Message"
                name="messageText"
                validate={[required, maxLength10]}
            />
            <button>Submit Message</button>
        </form>
    );
};
export default reduxForm<{}, Props>({
    form: 'dialogs',
})(DialogsForm);
