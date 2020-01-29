import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutMeThunkCreator} from "../../Redux/thunks/auth/thunks";

const HeaderContainer = (props) => {
    return (
        <Header {...props} />
    )
};

const mapStateToProps = ({auth}) => ({...auth});
export default connect(mapStateToProps, {
    logOut: logoutMeThunkCreator
})(HeaderContainer)
