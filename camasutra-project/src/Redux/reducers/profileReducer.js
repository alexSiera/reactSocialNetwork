const ADD_POST = 'ADD-POST';
const SET_POST_VALUE = 'SET-POST-VALUE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
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
    profileData: null
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
    }
    return state;

}

export const addPostAC = () => ({type: ADD_POST})
export const updatePostAC = newValue => ({type: SET_POST_VALUE, newValue: newValue})
export const setProfileAC = profileData => ({type: SET_USER_PROFILE, profileData})
export default profileReducer;