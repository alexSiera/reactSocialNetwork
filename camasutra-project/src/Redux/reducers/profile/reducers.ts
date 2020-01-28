
import {authMeThunkCreator} from "../auth/authReducer";
import {AppActionTypes, ApplicationState, INITIALIZED_SUCCESS} from "./types";

const initialState: ApplicationState = {
    initialized: false
};
const appReducer = (state = initialState, action: AppActionTypes): ApplicationState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS :
            return {
                ...state,
                initialized: true
            };
        default: return state;
    }
};
export const initializingSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch) => {
    try {
        const promise = await dispatch(authMeThunkCreator());
        dispatch(initializingSuccess());
    }
    catch (e) {
        console.log(e)
    }
};
export default appReducer;