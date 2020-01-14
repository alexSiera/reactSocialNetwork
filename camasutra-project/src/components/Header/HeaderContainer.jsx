import React, {Component} from 'react';
import Header from "./Header";
import {authMeThunkCreator, setAuthUserDataAC as setAuthUserData} from "../../Redux/reducers/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.authMe();
    }
    render() {
        return (
            <Header {...this.props} authData={this.props.authData} isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {...state.auth}
}
export default connect(mapStateToProps, {
    setAuthUserData,
    authMe: authMeThunkCreator
})(HeaderContainer)
