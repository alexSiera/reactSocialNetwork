import React from 'react';
import {reduxForm} from 'redux-form'
import {createField, Input} from "../../Common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/valiadators.ts";
import {FormSummaryError} from "../../Common/FormsControls/formsStyles";
import styled from 'styled-components';
const FormContainer = styled.div`
    margin-left: 10px;
    div {
        margin-bottom: 5px;
    }`;
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <FormContainer>
                {createField("Login", "login", [required], Input)}
                {createField("Password", "password", [required], Input, {type: "password"})}
                {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "remember me")}
                {captchaUrl && <div>
                    {createField("Enter captcha", "captcha", [required], Input, {type: "text"})}
                    <p>Please enter captcha</p>
                    <img src={captchaUrl} />
                </div>}
                {error &&
                <FormSummaryError>
                    {error}
                </FormSummaryError>
                }
                <div>
                    <button>Login</button>
                </div>
            </FormContainer>
        </form>)
};
export default reduxForm({
    form: 'login'
})(LoginForm);
