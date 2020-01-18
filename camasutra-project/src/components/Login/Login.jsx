import React from 'react';
import s from './Login.module.scss';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div className={s.formContainer}>
            <div>
                <Field placeholder="Login" name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder="Password" name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    </form>)
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);
const Login = ({loginMe}) => {
    const onSubmit = (formData) => {
        const {login: email, password, rememberMe} = formData;
        loginMe(email, password, rememberMe);
    }
    return <div>
        <h1 className={s.formMainHeading}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


export default Login;