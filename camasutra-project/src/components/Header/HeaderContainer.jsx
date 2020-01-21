import React, {Component} from 'react';
import Header from "./Header";
import {
    logoutMeThunkCreator,
    setAuthUserDataAC as setAuthUserData
} from "../../Redux/reducers/authReducer";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
    return (
        <Header {...props} />
    )
};

const mapStateToProps = ({auth}) => ({...auth});
export default connect(mapStateToProps, {
    setAuthUserData,
    logOut: logoutMeThunkCreator
})(HeaderContainer)
