const SET_DIALOG_VALUE = 'SET-DIALOG-VALUE';
const ADD_DIALOG = 'ADD-DIALOG';
let initialState = {
        messagesData: [{
            id: 1,
            message: "Ok!",
            likesCount: 12,
        }, {
            id: 2,
            message: "Sure!",
            likesCount: 12,
        }, {
            id: 3,
            message: "Hi dos",
            likesCount: 12,
        }, {
            id: 4,
            message: "Killer",
            likesCount: 12,
        }],
        dialogsData: [{
            id: 1,
            name: "Dimych"
        }, {
            id: 2,
            name: "Alex"
        }, {
            id: 3,
            name: "Anya"
        }, {
            id: 4,
            name: "Killer"
        }],
        dialogTextAreaValue: "",
    }
const dialogsReducer = (state = initialState, action) => {
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