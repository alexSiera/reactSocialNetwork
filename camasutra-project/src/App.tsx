import React, {useEffect, lazy, FC} from "react";
import "./App.scss";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./Redux/store/reduxStore";
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
import {getPath} from "./router-path";
import { RootState } from 'MyTypes';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const NewsContainer = lazy(() => import('./components/News/NewsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const Music = lazy(() => import('./components/Music/Music'));

type OwnProps = {
    initializeApp: () => void,
    initialized: boolean
}

const App: FC = ({initializeApp, initialized}: Props) => {
    useEffect(() => {
            initializeApp();
            window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
            return () => {
                window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
            }
        }
        , []);
    const catchAllUnhandledErrors = (promiseRejectectionEvent: any) => {
        alert("some error occured");
        console.error(promiseRejectectionEvent);
    };
    if (!initialized) return <Preloader/>;
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route path={getPath('dialogs')} render={WithSuspense(DialogsContainer)}/>
                    <Route path={getPath('profile', ':userId?')} render={WithSuspense(ProfileContainer)}/>
                    <Route path={getPath('users')} render={() => <UsersContainer/>}/>
                    <Route path={getPath('music')} render={WithSuspense(Music)}/>
                    <Route path={getPath('news')} render={WithSuspense(NewsContainer)}/>
                    <Route path={getPath('settings')} render={WithSuspense(Settings)}/>
                    <Route path={getPath('login')} render={() => <LoginContainer/>}/>
                    <Redirect from="/" exact to={getPath('profile')}/>
                    <Route path={getPath('notFound')} render={() => <NotFound/>}/>
                </Switch>
            </div>
        </div>
    )
        ;
};
const mapStateToProps = (state: RootState) => ({initialized: getInitialized(state.app)});
type Props = ReturnType<typeof mapStateToProps>;

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp
    })
)(App);
const SamuraiJSApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                // @ts-ignore
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
};
export default SamuraiJSApp;