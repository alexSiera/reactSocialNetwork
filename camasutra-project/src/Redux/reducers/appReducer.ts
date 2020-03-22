
import {authMeThunkCreator} from "./authReducer";
const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
export type InitialStateType = {
    initialized: boolean,
}

const initialState: InitialStateType = {
    initialized: false,
};
const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS :
            return {
                ...state,
                initialized: true
            };
        default: return state;
    }
};
type InitializingSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializingSuccess = (): InitializingSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch: any) => {
    try {
        const promise = await dispatch(authMeThunkCreator());
        dispatch(initializingSuccess());
    }
    catch (e) {
        console.log(e)
    }
};
export default appReducer;