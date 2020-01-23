import React, {useEffect, lazy, Suspense} from "react";
import "./App.scss";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./Redux/reduxStore";
import {compose} from 'redux';
import {connect, Provider} from "react-redux";
import {Route, withRouter, BrowserRouter} from "react-router-dom";
import {initializeApp} from "./Redux/reducers/appReducer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Navbar from "./components/Navbar/Navbar";
import {WithSuspense} from "./HOC/withSuspense";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const NewsContainer = lazy(() => import('./components/News/NewsContainer'));
const ProfileContainerWithHooks = lazy(() => import('./components/Profile/ProfileContainerWithHooks'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const Music = lazy(() => import('./components/Music/Music'));

const App = ({initializeApp, initialized}) => {
    useEffect(() => {
            initializeApp();
        }
        , []);
    if (!initialized) return <Preloader/>;
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                <Route path="/profile/:userId?" render={WithSuspense(ProfileContainerWithHooks)}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/music" render={WithSuspense(Music)}/>
                <Route path="/news" render={WithSuspense(NewsContainer)}/>
                <Route path="/settings" render={WithSuspense(Settings)}/>
                <Route path="/login" render={() => <LoginContainer/>}/>
            </div>
        </div>
    )
        ;
};
const mapStateToProps = ({app}) => ({initialized: app.initialized});
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp
    })
)(App);
const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
};
export default SamuraiJSApp;