import React, {Component} from 'react';
import Header from "./Header";
import {setAuthUserDataAC as setAuthUserData} from "../../Redux/reducers/authReducer";
import {connect} from "react-redux";
import {getAuthMe} from "../../api/api";

class HeaderContainer extends Component {
    componentDidMount() {
        getAuthMe().then(authData => {
            const {id, email, login} = authData;
            this.props.setAuthUserData(id, email, login);
        })
    }
    render() {
        return (
            <Header {...this.props} authData={this.props.authData} isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {authData: state.auth, isAuth: state.auth.isAuth, login: state.auth.login }
}
export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)
