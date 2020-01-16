import React, {Component} from 'react';
import Header from "./Header";
import {
    authMeThunkCreator,
    logoutMeThunkCreator,
    setAuthUserDataAC as setAuthUserData
} from "../../Redux/reducers/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.authMe();
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {...state.auth}
}
export default connect(mapStateToProps, {
    setAuthUserData,
    authMe: authMeThunkCreator,
    logOut: logoutMeThunkCreator
})(HeaderContainer)
