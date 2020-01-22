import React from 'react';
import s from './LoginForm.module.scss';
import {Field, reduxForm} from 'redux-form'
import {createField, Input} from "../../Common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/valiadators";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.formContainer}>
                {createField("Login", "login", [required], Input)}
                {createField("Password", "password", [required], Input, {type: "password"})}
                {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "remember me")}
                {error &&
                <div className={s.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </div>
        </form>)
}
export default reduxForm({
    form: 'login'
})(LoginForm);
