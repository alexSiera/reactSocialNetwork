const ADD_POST = 'ADD-POST';
const SET_POST_VALUE = 'SET-POST-VALUE';
const initialState = {
    posts: [{
        id: 1,
        message: "Hi how are you ?",
        likesCount: 12
    }, {
        id: 2,
        message: "It's my first post",
        likesCount: 11
    }, {
        id: 3,
        message: "Blabla",
        likesCount: 13
    }, {
        id: 4,
        message: "Dada",
        likesCount: 15
    }],
        textAreaValue: "it-kamasytra"
}

const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST: {
            const id = Math.floor(Math.random() * 100);
            const likesCount = Math.floor(Math.random() * 300);
            const stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            const newPost = {
                id,
                message: state.textAreaValue,
                likesCount,
            };
            stateCopy.posts.push(newPost);
            stateCopy.textAreaValue = "";
            return stateCopy;
        }
        break;
        case SET_POST_VALUE: {
            const stateCopy = {...state};
            stateCopy.textAreaValue = action.newValue;
            return stateCopy;
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