import React, {useEffect, lazy, FC} from "react";
import "./App.scss";
import Preloader from "./components/Common/Preloader/Preloader";
import {compose} from 'redux';
import {connect, Provider} from "react-redux";
import {Route, withRouter, HashRouter, Switch, Redirect} from "react-router-dom";
import {getPath} from "./router-path";
import configureStore, {AppState} from "./Redux/store/reduxStore";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Navbar from "./components/Navbar/Navbar";
import {WithSuspense} from "./HOC/withSuspense";
import NotFound from "./components/NotFound/NotFound";
import {initializeApp} from "./Redux/thunks/app/thunks";
import {getInitialized} from "./Redux/selectors/appSelectors";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const NewsContainer = lazy(() => import('./components/News/NewsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const Music = lazy(() => import('./components/Music/Music'));

export interface StateProps {
    initialized: boolean
}
export interface OwnProps {
    propFromParent: number
}
interface DispatchProps {
    initializeApp: () => void
}

type Props = StateProps & DispatchProps & OwnProps
const store = configureStore();
const App: FC<Props> = ({initializeApp, initialized}) => {
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
    );
};
const mapStateToProps = (state: AppState): StateProps => ({initialized: getInitialized(state.app)});
const AppContainer = compose(
    withRouter,
    connect (mapStateToProps, {
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