import React from 'react';
import {loginMeThunkCreator} from "../../Redux/reducers/authReducer";
import Login from "./Login";
import {connect} from "react-redux";

const LoginContainer = (props) => {
    return <Login loginMe={props.loginMe} />
}

const mapStateToProps = () =>{}

export default connect(mapStateToProps, {loginMe: loginMeThunkCreator})(LoginContainer);