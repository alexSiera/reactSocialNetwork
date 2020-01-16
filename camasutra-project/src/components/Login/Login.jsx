import React from 'react';
import s from './Login.module.scss';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    console.log("RERENDER")
    return (<form onSubmit={props.handleSubmit}>
        <div className={s.formContainer}>
            <div>
                <Field placeholder="Login" name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder="Password" name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox" placeholder="Login"/>
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
const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1 className={s.formMainHeading}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


export default Login;