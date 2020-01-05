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
    switch (action.type) {
        case ADD_DIALOG: {

            let stateCopy = {...state};

            let {dialogTextAreaValue: message} = stateCopy;
            const id = Math.floor(Math.random() * 100);
            const likesCount = Math.floor(Math.random() * 300);
            const newMessage = {
                id,
                message,
                likesCount,
            };
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            message = "";
            return stateCopy;
        }
            break;
        case SET_DIALOG_VALUE: {
            let stateCopy = {...state};
            stateCopy.dialogTextAreaValue = action.newValue;
            return stateCopy;

        }
        default: return state
            break;
    }
}
export const addDialogActionCreator = () => {
    return {
        type: ADD_DIALOG,
    }
}
export const updateDialogActionCreator = (newValue) => {
    return {
        type: SET_DIALOG_VALUE,
        newValue
    }
}

export default dialogsReducer;