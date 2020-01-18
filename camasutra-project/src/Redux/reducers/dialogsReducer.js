const SET_DIALOG_VALUE = 'SET-DIALOG-VALUE';
const ADD_DIALOG = 'ADD-DIALOG';
const initialState = {
        messagesData: [{
            id: 121,
            message: "Ok!",
            likesCount: 12,
        }, {
            id: 2221,
            message: "Sure!",
            likesCount: 12,
        }, {
            id: 3121,
            message: "Hi dos",
            likesCount: 12,
        }, {
            id: 4214,
            message: "Killer",
            likesCount: 12,
        }],
        dialogsData: [{
            id: 1321,
            name: "Dimych"
        }, {
            id: 2311,
            name: "Alex"
        }, {
            id: 3432,
            name: "Anya"
        }, {
            id: 412,
            name: "Killer"
        }],
        dialogTextAreaValue: "",
    }
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG:
            const newDialog = {
                id:Math.floor(Math.random() * 100),
                message: state.dialogTextAreaValue,
                likesCount: Math.floor(Math.random() * 300)
            }
            return {
                ...state,
                dialogTextAreaValue: '',
                messagesData: [...state.messagesData,newDialog],
            }
            break;
        case SET_DIALOG_VALUE:
            return {
                ...state,
                dialogTextAreaValue: action.newValue
            }
        default: return state;
            break;
    }
}
export const addDialogAC = () => {
    return {
        type: ADD_DIALOG,
    }
}
export const updateDialogAC = (newValue) => {
    return {
        type: SET_DIALOG_VALUE,
        newValue
    }
}

export default dialogsReducer;