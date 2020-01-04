const ADD_POST = 'ADD-POST';
const SET_POST_VALUE = 'SET-POST-VALUE';

const profileReducer = (state, action) =>{
    if(!action) return state;
    switch (action.type) {
        case ADD_POST: {
            const id = Math.floor(Math.random() * 100);
            const likesCount = Math.floor(Math.random() * 300);
            const newPost = {
                id,
                message: state.textAreaValue,
                likesCount,
            };
            state.posts.push(newPost);
            state.textAreaValue = "";
        }
        break;
        case SET_POST_VALUE: {
            state.textAreaValue = action.newValue;
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