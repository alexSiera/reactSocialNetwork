import React from 'react';
import s from './FormControls.module.scss';
const FormControl = ({input, meta, children, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={isError ?`${s.formControl} ${s.error}`: s.formControl }>
            <div>
                {children}
            </div>
            {isError ? <span>{meta.error}</span> : null}
        </div>
    )
}
export const Textarea = (props) => {
    const {input , meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
};
export const Input = (props) => {
    const {input , meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}