import React, {Component} from 'react';
import Header from "./Header";
import {authMeThunkCreator, setAuthUserDataAC as setAuthUserData} from "../../Redux/reducers/authReducer";
import {connect} from "react-redux";
import {getAuthMe} from "../../api/api";
import {unFollowThunkCreator} from "../../Redux/reducers/usersReducer";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.authMe();
        // getAuthMe().then(authData => {
        //     const {id, email, login} = authData;
        //     this.props.setAuthUserData(id, email, login);
        // })
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
