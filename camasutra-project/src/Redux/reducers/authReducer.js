import {authAPI} from "../../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET-USER-DATA';
const CLEAR_USER_DATA = 'auth/CLEAR_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case CLEAR_USER_DATA:
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false
            };
        default:
            return state;
    }
};
export const setAuthUserDataAC = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
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
        dispatch(setAuthUserDataAC(id, email, login));
    } catch (e) {
        console.log(e)
    }
};
export const loginMeThunkCreator = (email, password, rememberMe = false) => async (dispatch) => {
    try {
        const res = await authAPI.login(email, password, rememberMe);
        if (res.data.resultCode === 0) {
            dispatch(authMeThunkCreator());
        } else {
            const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
    catch (e) {
        console.log(e);
    }
};
export const logoutMeThunkCreator = () =>  async (dispatch) =>{
        try {
            const resCode = await authAPI.logOut()
            if (resCode === 0) dispatch(clearLoginDataAC());
        }
        catch (e) {
            console.log(e);
        }
};
export default authReducer;