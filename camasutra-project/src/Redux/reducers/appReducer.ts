import { authMeThunkCreator } from './authReducer';
import { ThunkAction } from 'redux-thunk';
import { AppStateType, InferActionsTypes } from '../reduxStore';
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
export type InitialStateType = {
    initialized: boolean;
};
const initialState: InitialStateType = {
    initialized: false,
};
const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const actions = {
    initializingSuccess: () => ({ type: 'INITIALIZED_SUCCESS' } as const),
};
type ActionsTypes = InferActionsTypes<typeof actions>;

export const initializeApp = (): ThunkType => async (dispatch): Promise<void> => {
    try {
        await dispatch(authMeThunkCreator());
        dispatch(actions.initializingSuccess());
    } catch (e) {
        console.log(e);
    }
};
export default appReducer;
