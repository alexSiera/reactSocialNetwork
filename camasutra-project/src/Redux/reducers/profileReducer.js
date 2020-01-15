import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = 'ADD_POST';
const SET_POST_VALUE = 'SET_POST_VALUE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
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
    textAreaValue: "it-kamasytra",
    profileData: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newProfile = {
                id: Math.floor(Math.random() * 100),
                message: state.textAreaValue,
                likesCount: Math.floor(Math.random() * 100),
            }
            return {
                ...state,
                posts: [...state.posts, newProfile],
                textAreaValue: ''
            }
            break;
        case SET_POST_VALUE:
            return {
                ...state,
                textAreaValue: action.newValue
            }
            break;
        default:
            break;
        case SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.profileData
            }
            break;
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
            break;
    }
    return state;

}

export const addPostAC = () => ({type: ADD_POST});
export const updatePostAC = newValue => ({type: SET_POST_VALUE, newValue: newValue});
export const setProfileAC = profileData => ({type: SET_USER_PROFILE, profileData});
export const setUserStatusAC = status => ({type: SET_USER_STATUS,status });
export default profileReducer;

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId).then(profile => {
            dispatch(setProfileAC(profile));
        });
    }
}
export const getUserStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(status => {
            dispatch(setUserStatusAC(status));
        })
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(serverStatus => {
            if(serverStatus.data.resultCode === 0) dispatch(setUserStatusAC(status));
        })
    }
}