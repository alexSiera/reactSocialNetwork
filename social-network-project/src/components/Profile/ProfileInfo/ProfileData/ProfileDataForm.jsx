import React from 'react';
import s from './ProfileData.module.scss';
import { createField, Input, Textarea } from '../../../Common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import style from '../../../Common/FormsControls/FormControls.module.scss';

const ProfileDataForm = ({ handleSubmit, error, profileData }) => {
    console.log(error);
    return (
        <form className={s.profileDataForm} onSubmit={handleSubmit}>
            {error}
            <h4>Profile Data Form</h4>

            <div className={s.formDataItems}>
                <label>
                    <b>Full name:</b>{' '}
                </label>
                <div className={s.formDataItemsInput}>
                    {createField('Enter full name', 'fullName', [], Input, { type: 'text' })}
                </div>
            </div>
            <div className={s.formDataItems}>
                <label>
                    <b>About me:</b>{' '}
                </label>
                <div className={s.formDataItemsInput}>
                    {createField('Enter about me info', 'aboutMe', [], Input, { type: 'text' })}
                </div>
            </div>
            <div className={s.formDataItems}>
                <label>
                    <b>Skills:</b>{' '}
                </label>
                <div className={s.formDataItemsInput}>
                    {createField('Enter you skills', 'lookingForAJobDescription', [], Textarea, { type: 'text' })}
                </div>
            </div>
            <div className={s.formDataItems}>
                <label>
                    <b>Are you looking for a job ?</b>{' '}
                </label>
                <div className={s.formDataItemsInput}>
                    {createField('Enter job status', 'lookingForAJob', [], Input, { type: 'checkbox' })}
                </div>
            </div>
            <div>
                <b>
                    Contacts:{' '}
                    {Object.keys(profileData.contacts).map((key) => {
                        return (
                            <div key={key} className={s.contact}>
                                <b>{key}:</b> <span>{createField(key, `contacts[${key}]`, [], Input)}</span>
                            </div>
                        );
                    })}
                </b>
            </div>
            <div className={s.formSubmitBtn}>
                <button>Save profile data</button>
            </div>
            <div>{error && <div className={style.formSummaryError}>{error}</div>}</div>
        </form>
    );
};
export default reduxForm({
    form: 'edit-profile',
})(ProfileDataForm);
