
import {AuthState, CaptchaData, CLEAR_USER_DATA, SET_CAPTCHA, SET_USER_DATA} from "./types";


export const setCaptcha = (captchaImg: CaptchaData) => {
    return {
        type: SET_CAPTCHA,
        payload: captchaImg
    }
};
export const setAuthUserDataAC = (authData: AuthState) => {
    return {
        type: SET_USER_DATA,
        payload: authData
    }
};
export const clearLoginDataAC = () => {
    return {
        type: CLEAR_USER_DATA,
        payload: null
    }
};