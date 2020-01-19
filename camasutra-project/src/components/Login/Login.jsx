import React from 'react';
import s from './Login.module.scss';
import LoginForm from "./LoginForm/LoginForm";
import {Redirect} from 'react-router-dom';
const Login = ({loginMe, isAuth}) => {
    const onSubmit = (formData) => {
        const {login: email, password, rememberMe} = formData;
        loginMe(email, password, rememberMe);
    };
    if (isAuth) {
        return <Redirect to="profile" />
    }
    return <div>
        <h1 className={s.formMainHeading}>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
};

export default Login;