import React from 'react';
import LoginForm from "./LoginForm/LoginForm";
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
const FormMainHeading = styled.h1`
    margin-left: 10px;
`;
const Login = ({loginMe, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        const {login: email, password, rememberMe, captcha = null} = formData;
        loginMe(email, password, rememberMe, captcha);
    };
    if (isAuth) {
        return <Redirect to="profile" />
    }
    return <div>
        <FormMainHeading>Login</FormMainHeading>
        <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
};

export default Login;