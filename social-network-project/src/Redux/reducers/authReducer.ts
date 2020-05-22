import { authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI } from '../../api/api';
import { stopSubmit } from 'redux-form';
import { AppStateType, InferActionsTypes } from '../reduxStore';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

// eslint-disable-next-line @typescript-eslint/no-use-before-define
export type InitialStateType = typeof initialState;
const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean | null,
    captchaUrl: null as string | null, // If null, then captcha is not required
};
const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'SET_CAPTCHA':
        case 'CLEAR_USER_DATA':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const actions = {
    setAuthUserDataAC: (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null) => {
        return {
            type: 'SET_USER_DATA',
            payload: {
                userId,
                email,
                login,
                isAuth,
            },
        } as const;
    },
    clearLoginDataAC: () => {
        return {
            type: 'CLEAR_USER_DATA',
            payload: null,
        } as const;
    },
    setCaptcha: (captchaImg: string | null) => {
        return {
            type: 'SET_CAPTCHA',
            payload: {
                captchaImg,
            },
        } as const;
    },
};
type ActionsTypes = InferActionsTypes<typeof actions>;

export const authMeThunkCreator = (): ThunkType => async (dispatch): Promise<void> => {
    try {
        const authData = await authAPI.getAuthMe();
        if (!authData || Object.keys(authData).length === ResultCodesEnum.Success)
            throw new Error('You loggin is not pass');
        const { id, email, login } = authData.data;
        dispatch(actions.setAuthUserDataAC(id, email, login, true));
    } catch (e) {
        console.log(e);
    }
};
export const loginMeThunkCreator = (
    email: string,
    password: string,
    rememberMe = false,
    captcha: string | null,
): ThunkType => async (dispatch): Promise<void> => {
    try {
        const res = await authAPI.login(email, password, rememberMe, captcha);
        if (res) {
            if (res.resultCode === ResultCodesEnum.Success) await dispatch(authMeThunkCreator());
            // success, get auth data
            else {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                if (res.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) await dispatch(getAndSetCaptchaImage()); // error need captcha
                const message = res.messages.length > 0 ? res.messages[0] : 'Some error';
                dispatch(stopSubmit('login', { _error: message }) as any);
            }
        }
    } catch (e) {
        console.log(e);
    }
};
export const getAndSetCaptchaImage = (): ThunkType => async (dispatch): Promise<void> => {
    try {
        const response = await securityAPI.getCaptcha();
        if (response) dispatch(actions.setCaptcha(response.url));
    } catch (e) {
        console.log(e);
    }
};
export const logoutMeThunkCreator = (): ThunkType => async (dispatch): Promise<void> => {
    try {
        const resCode = await authAPI.logOut();
        if (resCode === 0) dispatch(actions.clearLoginDataAC());
    } catch (e) {
        console.log(e);
    }
};
export default authReducer;
