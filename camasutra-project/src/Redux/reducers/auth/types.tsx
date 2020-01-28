
// Describing the different ACTION NAMES available
export const SET_USER_DATA = 'auth/SET_USER_DATA';
export const CLEAR_USER_DATA = 'auth/CLEAR_USER_DATA';
export const SET_CAPTCHA = 'auth/SET_CAPTCHA';

// Describing the shape of the app's slice of state
export interface AuthState {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean,
    captchaUrl: string
}
export interface CaptchaData {
    captchaUrl: string
}
interface SetCaptcha {
    type: typeof SET_CAPTCHA;
    payload: {
        captchaImg: string
    };
}
interface SetAuthUserDataAC {
    type: typeof SET_USER_DATA;
    payload: {
        userId: number,
        email: string,
        login: string,
        isAuth: boolean
    }
}
interface ClearLoginDataAC {
    type: typeof CLEAR_USER_DATA;
    payload: null
}
export type AuthActionTypes = SetCaptcha | SetAuthUserDataAC | ClearLoginDataAC;
