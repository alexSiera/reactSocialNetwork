import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = ({profileData}) => {
    if(!profileData) return <Preloader/>;
    return (
        <div>
            <h2>Profile Info</h2>
            <div>
                <img src={profileData.photos.large} className={s.imgMain} />

            </div>
            <div className={s.descriptionBlock}>
                <div>
                    Profile name: {profileData.fullName ? profileData.fullName : ""}
                </div>
                <div>
                    Description: {profileData.aboutMe ? profileData.aboutMe : ""}
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;