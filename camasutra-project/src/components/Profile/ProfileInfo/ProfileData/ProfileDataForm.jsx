import React from 'react';
import s from './ProfileData.module.scss';
import {createField, Input} from "../../../Common/FormsControls/FormsControls";
import {reduxForm} from 'redux-form';
import {maxLengthCreator} from "../../../../utils/validators/valiadators";
const ProfileDataForm = ({handleSubmit, profileData}) => {
    const maxLength15 = maxLengthCreator(15);
    return (
        <form className={s.profileDataForm} onSubmit={handleSubmit}>
            <h4>Profile Data Form</h4>
            <div className={s.formDataItems}>
                <label><b>Full name:</b> </label>
                <div className={s.formDataItemsInput}>
                    {createField("Enter full name", "fullName",[maxLength15], Input, {type: "text"})}
                </div>
            </div>
            <div className={s.formDataItems}>
                <label><b>About me:</b> </label>
                <div className={s.formDataItemsInput}>
                    {createField("Enter about me info", "about",[maxLength15], Input, {type: "text"})}
                </div>
            </div>
            <div className={s.formDataItems}>
                <label><b>Job Status:</b> </label>
                <div className={s.formDataItemsInput}>
                    {createField("Enter job status", "jobStatus",[maxLength15], Input, {type: "text"})}
                </div>
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