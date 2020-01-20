
import {authMeThunkCreator} from "./authReducer";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false,

}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS :
            return {
                ...state,
                initialized: true
            }
        default: return state;
    }
}
export const initializingSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch) => {
    const promise = dispatch(authMeThunkCreator());
    await promise.then(() => {
        dispatch(initializingSuccess());
    }).catch(e => console.log(e))
}
export default appReducer;