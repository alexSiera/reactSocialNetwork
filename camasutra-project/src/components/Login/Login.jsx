import React from 'react';
import s from './Login.module.scss';
import {Field, reduxForm} from 'redux-form'
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/valiadators";

let LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div className={s.formContainer}>
            <div>
                <Field placeholder="Login" name="login" validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder="Password" name="password" component={Input} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name="rememberMe" type="checkbox"/> <span>remember me</span>

            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    </form>)
}
LoginForm = reduxForm({
    form: 'login'
})(LoginForm);
const Login = ({loginMe}) => {
    const onSubmit = (formData) => {
        const {login: email, password, rememberMe} = formData;
        loginMe(email, password, rememberMe);
    }
    return <div>
        <h1 className={s.formMainHeading}>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}


export default Login;