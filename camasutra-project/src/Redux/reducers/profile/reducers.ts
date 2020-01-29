import {
    ADD_POST, DELETE_POST,
    ProfileActionTypes,
    ProfileState, SAVE_PHOTO_SUCCESS,
    SET_USER_PROFILE,
    SET_USER_STATUS
} from "./types";

const initialState: ProfileState = {
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
    profileData: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: ''
        }
    },
    profileUpdateStatusSuccess: false,
    status: ''
};
const profileReducer = (state = initialState, action: ProfileActionTypes): ProfileState => {
    switch (action.type) {
        case ADD_POST:
            const newProfile = {
                id: Math.floor(Math.random() * 100),
                message: action.payload,
                likesCount: Math.floor(Math.random() * 100),
            };
            return {
                ...state,
                posts: [...state.posts, newProfile],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.payload
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.payload
            };
        case DELETE_POST :
            return {
                ...state,
                posts: state.posts.filter((p) => {
                    return p.id !== action.payload;
                })
            };
        case SAVE_PHOTO_SUCCESS :
            return {
                ...state,
                profileData: {...state.profileData, photos: action.payload}
            };
        default:
            return state;
    }
};

export default profileReducer;