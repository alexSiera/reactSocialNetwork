import React from 'react';
import s from './LoginForm.module.scss';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Input } from '../../Common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/valiadators';
type PropsType = {
    captchaUrl: string;
};
export type LoginFormValuesType = {
    login: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
};
export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>;
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, PropsType> & PropsType> = ({
    handleSubmit,
    error,
    captchaUrl,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.formContainer}>
                {createField<LoginFormValuesTypeKeys>('Login', 'login', [required], Input)}
                {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, { type: 'password' })}
                {createField<LoginFormValuesTypeKeys>(
                    undefined,
                    'rememberMe',
                    [],
                    Input,
                    { type: 'checkbox' },
                    'remember me',
                )}
                {captchaUrl && (
                    <div>
                        {createField<LoginFormValuesTypeKeys>('Enter captcha', 'captcha', [required], Input, {
                            type: 'text',
                        })}
                        <p>Please enter captcha</p>
                        <img src={captchaUrl} alt="captcha" />
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
export default reduxForm<LoginFormValuesType, PropsType>({
    form: 'login',
})(LoginForm);
