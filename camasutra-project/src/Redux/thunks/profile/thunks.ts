import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {profileAPI} from "../../../api/api";
import {savePhotoSuccess, setProfileAC, setUserStatusAC} from "../../reducers/profile/actions";
import {ProfileData} from "../../reducers/profile/types";

export const getUserProfileThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const profile = await profileAPI.getUserProfile(userId);
        dispatch(setProfileAC(profile));
    } catch (e) {
        console.log(e)
    }
};
export const getUserStatusThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const status = await profileAPI.getStatus(userId);
        dispatch(setUserStatusAC(status));
    } catch (e) {
        console.log(e)
    }
};
export const updateStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    try {
        const serverStatus = await profileAPI.updateStatus(status);
        if (serverStatus.data.resultCode === 0) dispatch(setUserStatusAC(status));
    } catch (e) {
        console.log(e)
    }
};
export const savePhotoThunkCreator = (file: File) => async (dispatch: Dispatch) => {
    try {
        const response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos));
    } catch (e) {
        console.log(e)
    }
};
// @ts-ignore
export const saveProfileDataThunkCreator = (profileData: ProfileData) => async (dispatch: Dispatch, getState: any) => {
    try {
        const userId = getState().auth.id;
        const response = await profileAPI.saveProfileData(profileData);
        if (response.data.resultCode === 0) {
            // @ts-ignore
            dispatch(getUserProfileThunkCreator(userId));
        }
        else {
            const message: Array<string> = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit('edit-profile', {_error: message}));
            return Promise.reject(response.data.messages[0]);
        }
    } catch (e) {
        console.log(e)
    }
};