import React from 'react';
import s from './ProfileData.module.scss';

const ProfileData = ({profileData, isOwner, goToEditMode}) => {
    return (
        <div>
            <h2>Profile Info</h2>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit information</button>
            </div>}

            <div className={s.descriptionBlock}>
                <div>
                    <b>Full name:</b> {profileData.fullName ? profileData.fullName : "No info"}
                </div>
                <div className={s.aboutMe}>
                    <b>About me:</b> {profileData.aboutMe ? profileData.aboutMe : "No info"}
                </div>
                {profileData.lookingForAJob &&
                <div className={s.aboutMe}>
                    <b>My professional skills:</b>
                    {
                        profileData.lookingForAJobDescription ? profileData.lookingForAJobDescription : "No one"
                    }
                </div>}
                {!profileData.lookingForAJob &&
                <div className={s.aboutMe}>
                    <b>Job status:</b> I'am not looking for a job right now.
                </div>
                }
                <div>
                    <b>Contacts: {Object.keys(profileData.contacts)
                        .map((c => {
                            return <ContactsData key={c} contactTitle={c} contactValue={profileData.contacts[c]}/>
                        }))}
                    </b>
                </div>
            </div>

        </div>
    )
};
const ContactsData = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contactsData}><b>{contactTitle}</b>: {contactValue}</div>
    )
};
export default ProfileData;