
import {authMeThunkCreator} from "../auth/authReducer";
const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

const initialState = {
    initialized: false,

};
const appReducer = (state = initialState, action) => {
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