import React from 'react';
import { Field, WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import s from './FormControls.module.scss';
import { FieldValidatorType } from '../../../utils/validators/valiadators';

type FormControlPropsType = {
  meta: WrappedFieldMetaProps;
};
type TextAreaPropsType = {
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
};
export type InputPropsType = {
  input: WrappedFieldMetaProps;
  meta: WrappedFieldMetaProps;
};
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

export function createField<FormKeysType extends string>(
  placeholder: string | undefined,
  name: FormKeysType,
  validators: Array<FieldValidatorType>,
  component: React.FC<InputPropsType> | React.Component | string,
  props = {},
  text = '',
): React.ReactNode {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
      />
      {text}
    </div>
  );
}
