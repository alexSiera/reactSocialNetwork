import React from 'react';
import s from './LoginForm.module.scss';
import { reduxForm } from 'redux-form';
import { СreateField, Input } from '../../Common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/valiadators';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.formContainer}>
                {СreateField('Login', 'login', [required], Input)}
                {СreateField('Password', 'password', [required], Input, { type: 'password' })}
                {СreateField(null, 'rememberMe', null, Input, { type: 'checkbox' }, 'remember me')}
                {captchaUrl && (
                    <div>
                        {СreateField('Enter captcha', 'captcha', [required], Input, { type: 'text' })}
                        <p>Please enter captcha</p>
                        <img src={captchaUrl} />
                    </div>
                )}
                {error && <div className={s.formSummaryError}>{error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </div>
        </form>
    );
};
export default reduxForm({
    form: 'login',
})(LoginForm);
