import React from 'react';
import s from './FormControls.module.scss';
export const Textarea = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={isError ?`${s.formControl} ${s.error}`: s.formControl }>
            <div>
                <textarea {...input} {...props} />
            </div>
            {isError ? <span>{meta.error}</span> : null}
        </div>
    )
}