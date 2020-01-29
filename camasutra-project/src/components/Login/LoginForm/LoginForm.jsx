import React from 'react';
import s from './LoginForm.module.scss';
import {reduxForm} from 'redux-form'
import {createField, Input} from "../../Common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/valiadators.ts";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.formContainer}>
                {createField("Login", "login", [required], Input)}
                {createField("Password", "password", [required], Input, {type: "password"})}
                {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "remember me")}
                {captchaUrl && <div>
                    {createField("Enter captcha", "captcha", [required], Input, {type: "text"})}
                    <p>Please enter captcha</p>
                    <img src={captchaUrl} />
                </div>}
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
};
export default reduxForm({
    form: 'login'
})(LoginForm);
