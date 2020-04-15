import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';
type PropsType = {
    saveProfileData: () => void;
    savePhoto: () => void;
    isOwner: boolean;
    profileData: ProfileType;
    updateUserStatus: (newStatus: string) => Promise<any>;
    status: string;
};
const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo
                saveProfileData={props.saveProfileData}
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profileData={props.profileData}
                updateUserStatus={props.updateUserStatus}
                status={props.status}
            />
            <MyPostsContainer />
        </div>
    );
};
export default Profile;
