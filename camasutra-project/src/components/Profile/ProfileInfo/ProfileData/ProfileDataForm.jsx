import React from 'react';
import s from './ProfileData.module.scss';
import {createField, Input, Textarea} from "../../../Common/FormsControls/FormsControls";
import {reduxForm} from 'redux-form';
import {maxLengthCreator} from "../../../../utils/validators/valiadators";

const ProfileDataForm = ({handleSubmit, error, profileData}) => {
    const maxLength15 = maxLengthCreator(15);
    return (
        <form className={s.profileDataForm} onSubmit={handleSubmit}>
            <h4>Profile Data Form</h4>
            <div className={s.formDataItems}>
                <label><b>Full name:</b> </label>
                <div className={s.formDataItemsInput}>
                    {createField("Enter full name", "fullName", [maxLength15], Input, {type: "text"})}
                </div>
            </div>
            <div className={s.formDataItems}>
                <label><b>About me:</b> </label>
                <div className={s.formDataItemsInput}>
                    {createField("Enter about me info", "aboutMe", [maxLength15], Input, {type: "text"})}
                </div>
            </div>
            <div className={s.formDataItems}>
                <label><b>Skills:</b> </label>
                <div className={s.formDataItemsInput}>
                    {createField("Enter you skills", "lookingForAJobDescription", [maxLength15], Textarea, {type: "text"})}
                </div>
            </div>
            <div className={s.formDataItems}>
                <label><b>Are you looking for a job ?</b> </label>
                <div className={s.formDataItemsInput}>
                    {createField("Enter job status", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>
            </div>
            {error && <div>
                {error}
            </div>
            }
            <div>
                <b>Contacts: {Object.keys(profileData.contacts)
                    .map((key => {
                        return <div className={s.contact}>
                            <b>{key}:</b> <span>{createField(key, `contacts[${key}]`, [], Input, {type: "text"})}</span>
                        </div>
                    }))}
                </b>
            </div>
            <div className={s.formSubmitBtn}>
                <button>Save profile data</button>
            </div>
        </form>
    )
};
export default reduxForm({
    form: 'profileData'
})(ProfileDataForm);