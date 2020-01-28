import {stopSubmit} from "redux-form";
import {AuthState} from "../../reducers/auth/types";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import {authAPI, securityAPI} from "../../../api/api";
import {clearLoginDataAC, setAuthUserDataAC, setCaptcha} from "../../reducers/auth/actions";

export const authMeThunkCreator = (): ThunkAction<void, AuthState, null, any> => async (dispatch) => {
    try {
        const authData: AuthState = await authAPI.getAuthMe();
        if (!authData || Object.keys(authData).length === 0) throw new Error("You loggin is not pass");
        const data = {...authData, isAuth: true};
        dispatch(setAuthUserDataAC(data));
    } catch (e) {
        console.log(e)
    }
};
export const loginMeThunkCreator = (email: string, password: string, rememberMe: boolean = false, captcha: string): ThunkAction<void, AuthState, null, Action<string>> => async (dispatch) => {
    try {
        const res = await authAPI.login(email, password, rememberMe, captcha);
        if (res.data.resultCode === 0) dispatch(authMeThunkCreator()); // success, get auth data
        else {
            if (res.data.resultCode === 10) dispatch(getAndSetCaptchaImage()); // error need captcha
            const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
            dispatch(stopSubmit('login', {_error: message}));
        }
    } catch (e) {
        console.log(e);
    }
};

export const getAndSetCaptchaImage = (): ThunkAction<void, AuthState, null, any> => async (dispatch) => {
    try {
        const response = await securityAPI.getCaptcha();
        dispatch(setCaptcha(response.data.url));
    } catch (e) {
        console.log(e);
    }
};
export const logoutMeThunkCreator = (): ThunkAction<void, AuthState, null, any> => async (dispatch) => {
    try {
        const resCode = await authAPI.logOut();
        if (resCode === 0) dispatch(clearLoginDataAC());
    } catch (e) {
        console.log(e);
    }
};