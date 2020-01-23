import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
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
        default:
            return state;
    }
};

export const addPostAC = (newPost) => ({type: ADD_POST, newPost});
export const setProfileAC = (profileData) => ({type: SET_USER_PROFILE, profileData});
export const setUserStatusAC = status => ({type: SET_USER_STATUS, status});
export const deletePostAC = id => ({type: DELETE_POST, id});
export default profileReducer;

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