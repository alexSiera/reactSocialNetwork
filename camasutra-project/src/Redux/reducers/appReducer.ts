import { authMeThunkCreator } from './authReducer';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../reduxStore';
const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
type ActionsTypes = InitializingSuccessActionType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
export type InitialStateType = {
    initialized: boolean;
};
const initialState: InitialStateType = {
    initialized: false,
};
const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};
type InitializingSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS;
};
export const initializingSuccess = (): InitializingSuccessActionType => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = (): ThunkType => async (dispatch): Promise<void> => {
    try {
        await dispatch(authMeThunkCreator());
        dispatch(initializingSuccess());
    } catch (e) {
        console.log(e);
    }
};
export default appReducer;
