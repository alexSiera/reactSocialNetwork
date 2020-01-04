const SET_DIALOG_VALUE = 'SET-DIALOG-VALUE';
const ADD_DIALOG = 'ADD-DIALOG';
const dialogsReducer = (state, action) => {
    if(!action) return state;
    switch (action.type) {
        case ADD_DIALOG: {
            let {dialogTextAreaValue: message} = state;
            const id = Math.floor(Math.random() * 100);
            const likesCount = Math.floor(Math.random() * 300);
            const newMessage = {
                id,
                message,
                likesCount,
            };
            const {messagesData} = state;
            messagesData.push(newMessage);
            message = "";
        }
            break;
        case SET_DIALOG_VALUE: {
            let newMessage = action.newValue;
            state.dialogTextAreaValue = newMessage;
        }
        default:
            break;
    }
    return state;
}
export const addDialogActionCreator = () => {
    return {
        type: ADD_DIALOG,
    }
}
export const updateDialogActionCreator = (newValue) => {
    return {
        type: SET_DIALOG_VALUE,
        newValue: newValue
    }
}

export default dialogsReducer;