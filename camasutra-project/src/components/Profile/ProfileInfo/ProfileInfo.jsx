import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import avatar from '../../../assets/images/maleAvatar.jpg';
const ProfileInfo = ({profileData, updateUserStatus, status, isOwner, savePhoto}) => {
    if(!profileData) return <Preloader/>;
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            const file = e.target.files[0];
            savePhoto(file);
        }
    };
    return (
        <div>
            <h2>Profile Info</h2>
            <div>
                <img src={profileData.photos.large ? profileData.photos.large : avatar} className={s.imgMain} />
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    Profile name: {profileData.fullName ? profileData.fullName : ""}
                </div>
                <div className={s.aboutMe}>
                    Description: {profileData.aboutMe ? profileData.aboutMe : ""}
                </div>
                <div>
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;