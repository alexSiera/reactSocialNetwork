import {ADD_DIALOG, DialogsActionTypes, DialogsState, messageData} from "./types";


const initialState: DialogsState = {
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
};
const dialogsReducer = (state = initialState, action: DialogsActionTypes): DialogsState => {
    switch (action.type) {
        case ADD_DIALOG:
            const newDialog: messageData = {
                id: Math.floor(Math.random() * 100),
                message: action.payload,
                likesCount: Math.floor(Math.random() * 300)
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newDialog],
            };
        default: return state;
    }
};

export default dialogsReducer;