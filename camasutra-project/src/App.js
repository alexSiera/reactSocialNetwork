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
//import ProfileContainerWithHooks from "./components/Profile/ProfileContainerWithHooks";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import NewsContainer from "./components/News/NewsContainer";
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const NewsContainer = lazy(() => import('./components/News/NewsContainer'));
const ProfileContainerWithHooks = lazy(() => import('./components/Profile/ProfileContainerWithHooks'));
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
                <Route path="/dialogs" render={() => {
                    return (
                        <Suspense fallback={<div>Loading...</div>}>
                            <DialogsContainer/>
                        </Suspense>
                    )
                }
                }/>
                <Route path="/profile/:userId?" render={() => {
                    return (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ProfileContainerWithHooks/>
                        </Suspense>
                    )
                }
                }/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/music" component={Music}/>
                <Route path="/news" render={() => {
                    return (
                        <Suspense fallback={<div>Loading...</div>}>
                            <NewsContainer/>
                        </Suspense>
                    )
                }
                }/>
                <Route path="/settings" component={Settings}/>
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