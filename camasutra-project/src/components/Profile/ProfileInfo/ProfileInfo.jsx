import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";

const ProfileInfo = ({profileData, updateUserStatus, status, isOwner, savePhoto}) => {
    if (!profileData) return <Preloader/>;
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            const file = e.target.files[0];
            savePhoto(file);
        }
    };
    return (
        <div>
            <ProfileData isOwner={isOwner} profileData={profileData} savePhoto={onMainPhotoSelected}/>
            <div>
                <ProfileStatus isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
};
export default ProfileInfo;