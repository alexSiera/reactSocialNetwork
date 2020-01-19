import React from 'react';
import s from './LoginForm.module.scss';
import {Field, reduxForm} from 'redux-form'
import {Input} from "../../Common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/valiadators";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.formContainer}>
                <div>
                    <Field placeholder="Login" name="login" component={Input} validate={[required]} />
                </div>
                <div>
                    <Field placeholder="Password" name="password" component={Input} validate={[required]} type="password"/>
                </div>
                <div>
                    <Field component={Input} name="rememberMe" type="checkbox"/> <span>remember me</span>
                </div>
                {error && <div className={s.formSummaryError}>
                    {error}
                </div> }

                <div>
                    <button>Login</button>
                </div>
            </div>
    </form>)
}
export default reduxForm({
    form: 'login'
})(LoginForm);
