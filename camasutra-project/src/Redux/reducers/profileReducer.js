import {profileAPI, usersAPI} from "../../api/api";
import {stopSubmit} from 'redux-form';

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const SET_PROFILE_UPDATE_STATUS = '/profile/SET_PROFILE_UPDATE_STATUS';
const initialState = {
    posts: [{
        id: 113,
        message: "Hi how are you ?",
        likesCount: 12
    }, {
        id: 2123,
        message: "It's my first post",
        likesCount: 11
    }, {
        id: 3221,
        message: "Blabla",
        likesCount: 13
    }, {
        id: 4332,
        message: "Dada",
        likesCount: 15
    }],
    profileData: null,
    profileUpdateStatusSuccess: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
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
                profileData: action.profileData
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST :
            return {
                ...state,
                posts: state.posts.filter((p) => {
                    return p.id !== action.id;
                })
            };
        case SAVE_PHOTO_SUCCESS :
            return {
                ...state,
                profileData: {...state.profileData, photos: action.photos}
            };
        case SET_PROFILE_UPDATE_STATUS:
            return {
                ...state,
                profileUpdateStatusSuccess: action.updateStatus
            };
        default:
            return state;
    }
};

export const addPostAC = (newPost) => ({type: ADD_POST, newPost});
export const setProfileAC = (profileData) => ({type: SET_USER_PROFILE, profileData});
export const setUserStatusAC = status => ({type: SET_USER_STATUS, status});
export const savePhotoSuccess = photos => ({type: SAVE_PHOTO_SUCCESS, photos});
export const deletePostAC = id => ({type: DELETE_POST, id});
export const setProfileUpdateStatus = (updateStatus) => ({type: SET_PROFILE_UPDATE_STATUS, updateStatus});
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
            dispatch(setProfileUpdateStatus());
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
export default profileReducer;
