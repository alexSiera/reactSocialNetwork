import React, { useState } from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileData/ProfileDataForm';
import avatar from '../../../assets/images/maleAvatar.jpg';
import { ProfileType } from '../../../types/types';
type PropsType = {
    profileData: ProfileType;
    updateUserStatus: (newStatus: string) => Promise<any>;
    status: string;
    isOwner: boolean;
    savePhoto: (file: any) => void;
    saveProfileData: (profileData: any) => any;
};
const ProfileInfo: React.FC<PropsType> = ({
    profileData,
    updateUserStatus,
    status,
    isOwner,
    savePhoto,
    saveProfileData,
}) => {
    const [editMode, setEditMode] = useState(false);
    if (!profileData) return <Preloader />;
    const onMainPhotoSelected = (e: Event): void => {
        // @ts-ignore
        if (e.target.files.length) {
            // @ts-ignore
            const file = e.target.files[0];
            savePhoto(file);
        }
    };
    const onProfileDataFormSubmit = (profileFormData: any): void => {
        saveProfileData(profileFormData)
            .then(() => {
                setEditMode(false);
            })
            .catch((e: Error) => console.log(e));
    };
    // @ts-ignore
    return (
        <div>
            <div className={s.profileAvatar}>
                <img
                    src={profileData.photos.large ? profileData.photos.large : avatar}
                    className={s.imgMain}
                    alt="photo"
                />
                {isOwner && (
                    <span className={s.photosInputContainer}>
                        // @ts-ignore
                        <input className={s.photosInput} type="file" onChange={onMainPhotoSelected} accept="image/*" />
                        <label htmlFor="file">Update photo</label>
                    </span>
                )}
            </div>
            {editMode && (
                <ProfileDataForm
                    initialValues={profileData}
                    onSubmit={onProfileDataFormSubmit}
                    savePhoto={onMainPhotoSelected}
                    profileData={profileData}
                />
            )}
            {!editMode && (
                <ProfileData profileData={profileData} isOwner={isOwner} goToEditMode={(): void => setEditMode(true)} />
            )}

            <ProfileStatus isOwner={isOwner} status={status} updateUserStatus={updateUserStatus} />
        </div>
    );
};
export default ProfileInfo;
