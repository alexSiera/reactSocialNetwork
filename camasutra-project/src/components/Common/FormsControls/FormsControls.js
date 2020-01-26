import React from 'react';
import s from './FormControls.module.scss';
import {Field} from 'redux-form'

const FormControl = ({meta: {touched,error}, children}) => {
    const isError = touched && error;
    return (
        <div className={isError ? `${s.formControl} ${s.error}` : s.formControl}>
            <div>
                {children}
            </div>
            {isError ? <span>{error}</span> : null}
        </div>
    )
};
export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
};
export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
};
export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>{text}
    </div>
};