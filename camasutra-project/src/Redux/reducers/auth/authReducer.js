import {authAPI, securityAPI} from "../../../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET-USER-DATA';
const CLEAR_USER_DATA = 'auth/CLEAR_USER_DATA';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // If null, then captcha is not required
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
        case SET_CAPTCHA :
        case CLEAR_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
export const setCaptcha = (captchaImg) => {
    return {
        type: SET_CAPTCHA,
        payload: {
            captchaImg
        }
    }
};
export const setAuthUserDataAC = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
};
export const clearLoginDataAC = () => {
    return {
        type: CLEAR_USER_DATA
    }
};
export const authMeThunkCreator = () => async (dispatch) => {
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
export default authReducer;