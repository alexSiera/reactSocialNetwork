import React from 'react';
import {loginMeThunkCreator} from "../../Redux/reducers/authReducer";
import Login from "./Login";
import {connect} from "react-redux";
import {getIsAuth} from "../../Redux/selectors/authSelectors";

const LoginContainer = ({loginMe, isAuth}) => {
    return <Login isAuth={isAuth} loginMe={loginMe} />
}

const mapStateToProps = ({auth}) => ({
    isAuth: getIsAuth(auth)
})

export default connect(mapStateToProps, {loginMe: loginMeThunkCreator})(LoginContainer);