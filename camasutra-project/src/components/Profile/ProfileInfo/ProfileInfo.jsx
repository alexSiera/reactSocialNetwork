import React, {useState} from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import avatar from "../../../assets/images/maleAvatar.jpg";

const ProfileInfo = ({profileData, updateUserStatus, status, isOwner, savePhoto, saveProfileData}) => {
    const [editMode, setEditMode] = useState(false);
    if (!profileData) return <Preloader/>;
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            const file = e.target.files[0];
            savePhoto(file);
        }
    };
    const onProfileDataFormSubmit = (profileFormData) => {
        setEditMode(false);
        saveProfileData(profileData.userId, profileFormData);
    };
    return (
        <div>
            <div className={s.profileAvatar}>
                <img src={profileData.photos.large ? profileData.photos.large : avatar} className={s.imgMain}/>
                {isOwner &&
                <span className={s.photosInputContainer}>
                    <input className={s.photosInput} type="file" onChange={onMainPhotoSelected} accept="image/*"/>
                    <label htmlFor="file">Update photo</label>

                </span>}
            </div>
            {editMode && <ProfileDataForm onSubmit={onProfileDataFormSubmit} savePhoto={onMainPhotoSelected}
                                          profileData={profileData}/>}
            {!editMode &&
            <ProfileData profileData={profileData} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}

            <ProfileStatus isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>
        </div>
    )
};
export default ProfileInfo;