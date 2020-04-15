import React from 'react';
import s from './FormControls.module.scss';
import { Field } from 'redux-form';
type MetaObject = {
    touched: boolean;
    error: string;
};
type FormControlPropsType = {
    meta: MetaObject;
};
type TextAreaPropsType = {
    input: string;
    meta: MetaObject;
};
type InputPropsType = {
    input: string;
    meta: MetaObject;
};
// type CreateFieldType = {
//     placeholder: string;
//     name: string;
//     validators: string[];
//     component: React.FC;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     props?: any;
//     text?: string;
// };
const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
    const isError = touched && error;
    return (
        <div className={isError ? `${s.formControl} ${s.error}` : s.formControl}>
            <div>{children}</div>
            {isError ? <span>{error}</span> : null}
        </div>
    );
};
export const Textarea: React.FC<TextAreaPropsType> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};
export const Input: React.FC<InputPropsType> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};
export const СreateField = (
    placeholder: string,
    name: string,
    validators: string[],
    component: React.FC,
    props = {},
    text = '',
) => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} />
            {text}
        </div>
    );
};
