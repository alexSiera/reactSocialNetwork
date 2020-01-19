import React, {Component} from 'react';
import Header from "./Header";
import {
    logoutMeThunkCreator,
    setAuthUserDataAC as setAuthUserData
} from "../../Redux/reducers/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {

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
    logOut: logoutMeThunkCreator
})(HeaderContainer)
