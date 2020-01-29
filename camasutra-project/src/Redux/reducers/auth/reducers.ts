import {AuthActionTypes, AuthState, CLEAR_USER_DATA, SET_CAPTCHA, SET_USER_DATA} from "./types";

const initialState: AuthState = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: ''
};
const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
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
export default authReducer;