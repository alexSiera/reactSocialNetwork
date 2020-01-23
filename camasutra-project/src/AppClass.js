import React, {Component} from "react";
import "./App.scss";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from 'redux';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {initializeApp} from "./Redux/reducers/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import ProfileContainerWithHooks from "./components/Profile/ProfileContainer";

class AppClass extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized) return <Preloader/>;
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer />
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <DialogsContainer />}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainerWithHooks />} />
                    <Route path="/users" render={() => <UsersContainer/>} />
                    <Route path="/music" component={Music} />
                    <Route path="/news" render={() => <NewsContainer />} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/login" render={() => <LoginContainer />} />
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({app}) => ({initialized: app.initialized});
export default compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp
    })
)(AppClass)