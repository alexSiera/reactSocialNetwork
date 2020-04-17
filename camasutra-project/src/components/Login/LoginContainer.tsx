import React from 'react';
import { loginMeThunkCreator } from '../../Redux/reducers/authReducer';
import Login from './Login';
import { connect } from 'react-redux';
import { getCaptchaUrl, getIsAuth } from '../../Redux/selectors/authSelectors';
import { AppStateType } from '../../Redux/reduxStore';
type MapStateToProps = {
    captchaUrl: string;
    isAuth: boolean;
};
type MapDispatchPropsType = {
    loginMe: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void;
};
const LoginContainer: React.FC<MapStateToProps & MapDispatchPropsType> = (props) => {
    return <Login loginMe={props.loginMe} captchaUrl={props.captchaUrl} isAuth={props.isAuth} />;
};

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    isAuth: getIsAuth(state.auth),
    captchaUrl: getCaptchaUrl(state.auth),
});

// @ts-ignore
export default connect(mapStateToProps, { loginMe: loginMeThunkCreator })(LoginContainer);
