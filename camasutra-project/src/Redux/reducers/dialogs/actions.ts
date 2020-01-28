import {ADD_DIALOG} from "./types";

export const addDialogAC = (newMessage: string) => {
    return {
        type: ADD_DIALOG,
        payload: newMessage
    }
};