import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Login.module.scss';
import LoginForm, { LoginFormValuesType } from './LoginForm/LoginForm';

type PropsType = {
  loginMe: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void;
  isAuth: boolean;
  captchaUrl: string;
};
const Login: React.FC<PropsType> = ({ loginMe, isAuth, captchaUrl }) => {
  const onSubmit = (formData: LoginFormValuesType): void => {
    const { login: email, password, rememberMe, captcha = '' } = formData;
    loginMe(email, password, rememberMe, captcha);
  };
  if (isAuth) {
    return <Redirect to="profile" />;
  }
  return (
    <div>
      <h1 className={s.formMainHeading}>Login</h1>
      <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

export default Login;
