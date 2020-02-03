import React from 'react';
import {Field} from 'redux-form';
import {FormComponent} from "./formsStyles";


const FormControl = ({meta: {touched,error}, children}) => {
    const isError = touched && error;
    return (
        <FormComponent isError={isError}>
            <div>
                {children}
            </div>
            {isError ? <span>{error}</span> : null}
        </FormComponent>
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