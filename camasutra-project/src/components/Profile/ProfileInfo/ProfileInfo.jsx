import React, {useState} from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import avatar from "../../../assets/images/maleAvatar.jpg";

const ProfileInfo = ({profileData, updateUserStatus, status, isOwner, savePhoto}) => {
    const [editMode, setEditMode] = useState(false);
    if (!profileData) return <Preloader/>;
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            const file = e.target.files[0];
            savePhoto(file);
        }
    };
    const onProfileDataFormSubmit = ({profileFormData}) => {

    };
    return (
        <div>
            <div>
                <img src={profileData.photos.large ? profileData.photos.large : avatar} className={s.imgMain}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            </div>
            {editMode && <ProfileDataForm onSubmit={onProfileDataFormSubmit} savePhoto={onMainPhotoSelected} profileData={profileData} />}
            {!editMode && <ProfileData profileData={profileData} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />}

            <ProfileStatus isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>
        </div>
    )
};
export default ProfileInfo;