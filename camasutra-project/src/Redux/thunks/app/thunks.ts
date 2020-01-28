import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import {AppState} from "../../store/reduxStore";


export const initializeApp = () : ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
    try {
        const promise = await dispatch(authMeThunkCreator());
        dispatch(initializingSuccess());
    }
    catch (e) {
        console.log(e)
    }
};