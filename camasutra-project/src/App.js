import React, {useEffect, lazy} from "react";
import "./App.scss";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./Redux/reduxStore";
import {compose} from 'redux';
import {connect, Provider} from "react-redux";
import {Route, withRouter, HashRouter, Switch, Redirect} from "react-router-dom";
import {initializeApp} from "./Redux/reducers/appReducer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Navbar from "./components/Navbar/Navbar";
import {WithSuspense} from "./HOC/withSuspense";
import {getInitialized} from "./Redux/selectors/appSelectors";
import NotFound from "./components/NotFound/NotFound";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const NewsContainer = lazy(() => import('./components/News/NewsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
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
                <Switch>
                    <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/music" render={WithSuspense(Music)}/>
                    <Route path="/news" render={WithSuspense(NewsContainer)}/>
                    <Route path="/settings" render={WithSuspense(Settings)}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                    <Redirect from="/" exact  to="/profile/"/>
                    <Route path="*" render={() => <NotFound />}/>

                </Switch>
            </div>
        </div>
    )
        ;
};
const mapStateToProps = ({app}) => ({initialized: getInitialized(app)});
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp
    })
)(App);
const SamuraiJSApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
};
export default SamuraiJSApp;