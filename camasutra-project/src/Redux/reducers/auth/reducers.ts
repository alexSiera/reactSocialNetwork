import {AuthActionTypes, AuthState, CLEAR_USER_DATA, SET_CAPTCHA, SET_USER_DATA} from "./types";

const initialState: AuthState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: ''
};
const appReducer = (state = initialState, action: AuthActionTypes): AuthState => {
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
export default appReducer;