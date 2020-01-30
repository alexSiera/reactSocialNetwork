export const getProfileProfilePage = (profilePage) => {
    return profilePage;
};
export const getProfileData = (profilePage) => {
    return profilePage.profileData;
};
export const getStatus = (profilePage) => {
    return profilePage.status;
};
export const getProfileUpdateStatus= (profilePage) => {
    return profilePage.profileUpdateStatusSuccess;
};
export const getProfileAvatar = (profilePage) => {
    if(!profilePage.profileData) return '';
    else if (profilePage.profileData.photos) return profilePage.profileData.photos.small;
};
