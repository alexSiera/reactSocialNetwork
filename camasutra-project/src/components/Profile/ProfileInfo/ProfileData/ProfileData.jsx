import React from 'react';
import s from './ProfileData.module.scss';
import avatar from '../../../../assets/images/maleAvatar.jpg';

const ProfileData = ({profileData, isOwner, savePhoto}) => {
    return (
        <div>
            <h2>Profile Info</h2>
            <div>
                <img src={profileData.photos.large ? profileData.photos.large : avatar} className={s.imgMain}/>
                {isOwner && <input type="file" onChange={savePhoto}/>}
            </div>
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
                    <ContactsData contactTitle={Object.keys(profileData.contacts)}
                                  contactValue={Object.values(profileData.contacts)}/>
                </div>
            </div>
        </div>
    )
};
const ContactsData = ({contactTitle, contactValue}) => {
    return (
        <>
            <h4 className={s.contactsHeading}>Contacts: </h4>
            <ul className={s.contactsLists}>
                <div>
                    {contactTitle.map((t) => {
                        return (
                            <li><b>{t}</b></li>
                        )
                    })}
                </div>
                <div>
                    {contactValue.map((v) => {
                        return (
                            <li><b>{v}</b></li>
                        )
                    })}
                </div>
            </ul>
        </>
    )
};
export default ProfileData;