import React, {Component} from 'react';
import Header from "./Header";
import {setAuthUserDataAC as setAuthUserData} from "../../Redux/reducers/authReducer";
import {connect} from "react-redux";
import * as axios from 'axios';

class HeaderContainer extends Component {
    getAuthMe = async () => {
        try {
            const baseUrl = 'https://social-network.samuraijs.com/api/1.0/auth/me';
            //if(!userId) userId = 2;
            const user = await axios.get(`${baseUrl}`, {
                withCredentials: true
            });
            debugger
            if (user.data.resultCode === 0) {
                const {id, email, login} = user.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        } catch
            (e) {
            console.log(e)
        }
    }
    componentDidMount() {
        this.getAuthMe()
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
