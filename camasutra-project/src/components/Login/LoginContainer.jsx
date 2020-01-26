import React from 'react';
import {loginMeThunkCreator} from "../../Redux/reducers/authReducer";
import Login from "./Login";
import {connect} from "react-redux";
import {getCaptchaUrl, getIsAuth} from "../../Redux/selectors/authSelectors";

const LoginContainer = (props) => {
    return <Login {...props} />
};

const mapStateToProps = ({auth}) => ({
    isAuth: getIsAuth(auth),
    captchaUrl: getCaptchaUrl(auth)
});

export default connect(mapStateToProps, {loginMe: loginMeThunkCreator})(LoginContainer);