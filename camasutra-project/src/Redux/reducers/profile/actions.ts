import {
    ADD_POST,
    DELETE_POST,
    Photos,
    ProfileData,
    SAVE_PHOTO_SUCCESS,
    SET_USER_PROFILE,
    SET_USER_STATUS
} from "./types";


export const addPostAC = (newPost: string) => ({type: ADD_POST, payload: newPost});
export const setProfileAC = (profileData: ProfileData) => ({type: SET_USER_PROFILE, payload: profileData});
export const setUserStatusAC = (status: string) => ({type: SET_USER_STATUS, payload: status});
export const savePhotoSuccess = (photos: Photos) => ({type: SAVE_PHOTO_SUCCESS, payload: photos});
export const deletePostAC = (id: number) => ({type: DELETE_POST, payload: id});