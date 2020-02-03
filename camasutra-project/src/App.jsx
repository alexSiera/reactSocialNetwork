import React, {useEffect, lazy, FC} from "react";
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
import styled from 'styled-components';

const AppWrapper = styled.div`
    display: grid;
      width: 1200px;
      margin: 0 auto;
      grid-template-areas: "header header" "nav content";
      grid-template-rows: 60px 1fr;
      grid-template-columns: 2fr 10fr;
  /* grid-gap: 10px; */
`;
const AppWrapperContent = styled.div`
    grid-area: content;
    background-color: darkblue;
`
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const NewsContainer = lazy(() => import('./components/News/NewsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const Music = lazy(() => import('./components/Music/Music'));

const store = configureStore();
const App = ({initializeApp, initialized}) => {
    useEffect(() => {
            initializeApp();
            window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
            return () => {
                window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
            }
        }
        , []);
    const catchAllUnhandledErrors = (promiseRejectectionEvent) => {
        alert("some error occured");
        console.error(promiseRejectectionEvent);
    };
    if (!initialized) return <Preloader/>;
    return (
        <AppWrapper>
            <HeaderContainer/>
            <Navbar/>
            <AppWrapperContent>
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
            </AppWrapperContent>
        </AppWrapper>
    );
};
const mapStateToProps = (state) => ({initialized: getInitialized(state.app)});
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
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
};
export default SamuraiJSApp;