// Describing the different ACTION NAMES available
export const ADD_POST = 'profile/ADD_POST';
export const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
export const SET_USER_STATUS = 'profile/SET_USER_STATUS';
export const DELETE_POST = 'profile/DELETE_POST';
export const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

// Describing the shape of the app's slice of state
export interface ProfileState {
    posts: Array<Posts>,
    profileData: ProfileData
    profileUpdateStatusSuccess: boolean
    status: string
}

export interface Posts {
    id: number,
    message: string,
    likesCount: number
}

export interface ProfileData {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number,
    photos: Photos
}

export interface Photos {
        small: string,
        large: string
}

interface AddPostAC {
    type: typeof ADD_POST;
    payload: string;
}

interface SetProfileAC {
    type: typeof SET_USER_PROFILE,
    payload: ProfileData
}

interface SetUserStatusAC {
    type: typeof SET_USER_STATUS,
    payload: string
}

interface SavePhotoSuccessAC {
    type: typeof SAVE_PHOTO_SUCCESS,
    payload: Photos
}

interface DeletePostAC {
    type: typeof DELETE_POST,
    payload: number
}

export type ProfileActionTypes = AddPostAC | SetProfileAC | SetUserStatusAC | SavePhotoSuccessAC | DeletePostAC;
