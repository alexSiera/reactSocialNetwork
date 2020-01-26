import React from 'react';
import s from './Login.module.scss';
import LoginForm from "./LoginForm/LoginForm";
import {Redirect} from 'react-router-dom';
const Login = ({loginMe, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        const {login: email, password, rememberMe, captcha = null} = formData;
        loginMe(email, password, rememberMe, captcha);
    };
    if (isAuth) {
        return <Redirect to="profile" />
    }
    return <div>
        <h1 className={s.formMainHeading}>Login</h1>
        <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
};

export default Login;