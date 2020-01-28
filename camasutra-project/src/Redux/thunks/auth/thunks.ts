import {stopSubmit} from "redux-form";
import {AuthState} from "../../reducers/auth/types";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import {authAPI} from "../../../api/api";

export const authMeThunkCreator = (): ThunkAction<void, AuthState, null, null> => async (dispatch) => {
    try {
        const authData = await authAPI.getAuthMe();
        if (!authData || Object.keys(authData).length === 0) throw new Error("You loggin is not pass");
        const {id, email, login} = authData;
        dispatch(setAuthUserDataAC(id, email, login, true));
    } catch (e) {
        console.log(e)
    }
};
export const loginMeThunkCreator = (email, password, rememberMe = false, captcha) => async (dispatch) => {
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
export const getAndSetCaptchaImage = () => async dispatch => {
    try {
        const response = await securityAPI.getCaptcha();
        dispatch(setCaptcha(response.data.url));
    } catch (e) {
        console.log(e);
    }
};
export const logoutMeThunkCreator = () => async (dispatch) => {
    try {
        const resCode = await authAPI.logOut();
        if (resCode === 0) dispatch(clearLoginDataAC());
    } catch (e) {
        console.log(e);
    }
};