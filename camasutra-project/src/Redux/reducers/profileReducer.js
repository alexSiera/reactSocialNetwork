const ADD_POST = 'ADD-POST';
const SET_POST_VALUE = 'SET-POST-VALUE';
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
    textAreaValue: "it-kamasytra"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: Math.floor(Math.random() * 100),
                    message: state.textAreaValue,
                    likesCount: Math.floor(Math.random() * 100),
                }],
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
    }
    return state;

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}
export const updatePostActionCreator = (newValue) => {
    return {
        type: SET_POST_VALUE,
        newValue: newValue
    }
}

export default profileReducer;