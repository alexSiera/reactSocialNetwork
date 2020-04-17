import { profileAPI } from '../../api/api';
import { stopSubmit } from 'redux-form';
import { PhotosProfileType, PostType, ProfileType } from '../../types/types';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../reduxStore';

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
type ActionsTypes = AddPostACType | SetProfileACType | SetUserStatusACType | SavePhotoSuccessType | DeletePostACType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
const initialState = {
    posts: [
        {
            id: 113,
            message: 'Hi how are you ?',
            likesCount: 12,
        },
        {
            id: 2123,
            message: "It's my first post",
            likesCount: 11,
        },
        {
            id: 3221,
            message: 'Blabla',
            likesCount: 13,
        },
        {
            id: 4332,
            message: 'Dada',
            likesCount: 15,
        },
    ] as Array<PostType>,
    profileData: null as ProfileType | null,
    profileUpdateStatusSuccess: null,
    status: '',
};
export type InitialStateType = typeof initialState;

const profileReducer = (
    state = initialState,
    action: ActionsTypes,
): {
    profileUpdateStatusSuccess: null;
    profileData: ProfileType | undefined | null;
    posts: Array<PostType>;
    status: string | undefined;
} => {
    switch (action.type) {
        case ADD_POST:
            const newProfile = {
                id: Math.floor(Math.random() * 100),
                message: action.newPost,
                likesCount: Math.floor(Math.random() * 100),
            };
            return {
                ...state,
                posts: [...state.posts, newProfile],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.profileData,
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => {
                    return p.id !== action.id;
                }),
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profileData: { ...state.profileData, photos: action.photos } as ProfileType,
            };
        default:
            return state;
    }
};
type AddPostACType = {
    type: typeof ADD_POST;
    newPost: string;
};
type SetProfileACType = {
    type: typeof SET_USER_PROFILE;
    profileData: ProfileType | undefined | null;
};
type SetUserStatusACType = {
    type: typeof SET_USER_STATUS;
    status: string | undefined;
};
type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS;
    photos: PhotosProfileType;
};
type DeletePostACType = {
    type: typeof DELETE_POST;
    id: number;
};
export const addPostAC = (newPost: string): AddPostACType => ({ type: ADD_POST, newPost });
export const setProfileAC = (profileData: ProfileType | undefined | null): SetProfileACType => ({
    type: SET_USER_PROFILE,
    profileData,
});
export const setUserStatusAC = (status: string | undefined): SetUserStatusACType => ({ type: SET_USER_STATUS, status });
export const savePhotoSuccess = (photos: PhotosProfileType): SavePhotoSuccessType => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
});
export const deletePostAC = (id: number): DeletePostACType => ({ type: DELETE_POST, id });

export const getUserProfileThunkCreator = (userId: number): ThunkType => async (dispatch): Promise<void> => {
    try {
        const profile = await profileAPI.getUserProfile(userId);
        dispatch(setProfileAC(profile));
    } catch (e) {
        console.log(e);
    }
};
export const getUserStatusThunkCreator = (userId: number): ThunkType => async (dispatch): Promise<void> => {
    try {
        const status = await profileAPI.getStatus(userId);
        dispatch(setUserStatusAC(status));
    } catch (e) {
        console.log(e);
    }
};
export const updateStatusThunkCreator = (status: string): ThunkType => async (dispatch): Promise<void> => {
    try {
        const serverStatus = await profileAPI.updateStatus(status);
        if (serverStatus) {
            if (serverStatus.resultCode === 0) dispatch(setUserStatusAC(status));
        }
    } catch (e) {
        console.log(e);
    }
};
export const savePhotoThunkCreator = (file: File): ThunkType => async (dispatch): Promise<void> => {
    try {
        const response = await profileAPI.savePhoto(file);
        if (response) dispatch(savePhotoSuccess(response));
    } catch (e) {
        console.log(e);
    }
};
export const saveProfileDataThunkCreator = (profileData: ProfileType): ThunkType => async (
    dispatch,
    getState,
): Promise<void> => {
    try {
        const userId = getState().auth.userId;
        const response = await profileAPI.saveProfileData(profileData);
        if (response?.resultCode === 0) {
            if (userId) await dispatch(getUserProfileThunkCreator(userId));
        } else {
            if (response?.data) {
                const message = response?.data !== {} ? response.messages[0] : 'Some error';
                // @ts-ignore
                dispatch(stopSubmit('edit-profile', { _error: message }));
                return Promise.reject(response.messages[0]);
            }
        }
    } catch (e) {
        console.log(e);
    }
};
// @ts-ignore
export default profileReducer;
