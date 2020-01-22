import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatar from '../../../assets/images/maleAvatar.jpg';
const ProfileInfo = ({profileData, updateUserStatus, status}) => {
    if(!profileData) return <Preloader/>;
    return (
        <div>
            <h2>Profile Info</h2>
            <div>
                <img src={profileData.photos.large ? profileData.photos.large : avatar} className={s.imgMain} />
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    Profile name: {profileData.fullName ? profileData.fullName : ""}
                </div>
                <div className={s.aboutMe}>
                    Description: {profileData.aboutMe ? profileData.aboutMe : ""}
                </div>
                <div>
                    <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
                </div>
                    {/* <img src="https://www.thoughtco.com/thmb/JhuPr0_SbnnIXiTm1PrQ5nfjdvQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/acat-874e4928f96e4e96bec0b1723ca5a909.jpg" /> */}
                {/*{profileData.fullName}*/}
            </div>
        </div>
    )
}
export default ProfileInfo;