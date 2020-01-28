import {ADD_NEWS} from "./types";

export const addNewsAC = (newNewsText: string) => {
    return {
        type: ADD_NEWS,
        payload: newNewsText
    }
};