export const getUserId = (auth) => {
    return auth.id;
};
export const getIsAuth = (auth) => {
    return auth.isAuth;
};
export const getCaptchaUrl = (auth) => {
    return auth.captchaUrl
};