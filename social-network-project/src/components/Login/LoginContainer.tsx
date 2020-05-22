import React from 'react';
import { loginMeThunkCreator } from '../../Redux/reducers/authReducer';
import Login from './Login';
import { connect } from 'react-redux';
import { getCaptchaUrl, getIsAuth } from '../../Redux/selectors/authSelectors';
import { AppStateType } from '../../Redux/reduxStore';
type MapStateToProps = {
    captchaUrl: string | null;
    isAuth: boolean;
};
type MapDispatchPropsType = {
    loginMe: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void;
};
const LoginContainer: React.FC<MapStateToProps & MapDispatchPropsType> = (props) => {
    return <Login loginMe={props.loginMe} captchaUrl={props.captchaUrl as string} isAuth={props.isAuth} />;
};

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    isAuth: getIsAuth(state.auth),
    captchaUrl: getCaptchaUrl(state.auth),
});

export default connect<MapStateToProps, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    loginMe: loginMeThunkCreator,
})(LoginContainer);
