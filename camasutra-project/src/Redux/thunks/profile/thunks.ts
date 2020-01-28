import {stopSubmit} from "redux-form";

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    try {
        const profile = await profileAPI.getUserProfile(userId);
        dispatch(setProfileAC(profile));
    } catch (e) {
        console.log(e)
    }
};
export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
    try {
        const status = await profileAPI.getStatus(userId);
        dispatch(setUserStatusAC(status));
    } catch (e) {
        console.log(e)
    }
};
export const updateStatusThunkCreator = (status) => async (dispatch) => {
    try {
        const serverStatus = await profileAPI.updateStatus(status);
        if (serverStatus.data.resultCode === 0) dispatch(setUserStatusAC(status));
    } catch (e) {
        console.log(e)
    }
};
export const savePhotoThunkCreator = (file) => async (dispatch) => {
    try {
        const response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos));
    } catch (e) {
        console.log(e)
    }
};
export const saveProfileDataThunkCreator = (profileData) => async (dispatch, getState) => {
    try {
        const userId = getState().auth.userId;
        const response = await profileAPI.saveProfileData(profileData);
        if (response.data.resultCode === 0) {
            dispatch(getUserProfileThunkCreator(userId));
        }
        else {
            const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit('edit-profile', {_error: message}));
            return Promise.reject(response.data.messages[0]);
        }
    } catch (e) {
        console.log(e)
    }
};