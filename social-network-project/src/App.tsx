import React, { useEffect, lazy, FC } from 'react';
import './App.scss';
import Preloader from './components/Common/Preloader/Preloader';
import store, { AppStateType } from './Redux/reduxStore';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { Route, withRouter, HashRouter, Switch, Redirect } from 'react-router-dom';
import { initializeApp } from './Redux/reducers/appReducer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Navbar from './components/Navbar/Navbar';
import { WithSuspense } from './HOC/withSuspense';
import { getInitialized } from './Redux/selectors/appSelectors';
import NotFound from './components/NotFound/NotFound';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const NewsContainer = lazy(() => import('./components/News/NewsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const Music = lazy(() => import('./components/Music/Music'));
type MapStatePropsType = {
    initialized: boolean;
};
type MapDispatchPropsType = {
    initializeApp: () => void;
};
type OwnPropsType = {};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const App: FC<PropsType> = ({ initializeApp, initialized }) => {
    const catchAllUnhandledErrors = (promiseRejectectionEvent: PromiseRejectionEvent): void => {
        alert('some error occured');
        console.error(promiseRejectectionEvent);
    };
    useEffect(() => {
        initializeApp();
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
        return (): void => {
            window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
        };
    }, []);

    if (!initialized) return <Preloader />;
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
                <Switch>
                    <Route path="/dialogs" render={WithSuspense(DialogsContainer)} />
                    <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)} />
                    <Route path="/users" render={(): React.ReactNode => <UsersContainer pageTitle={'Samurai'} />} />
                    <Route path="/music" render={WithSuspense(Music)} />
                    <Route path="/news" render={WithSuspense(NewsContainer)} />
                    <Route path="/settings" render={WithSuspense(Settings)} />
                    <Route path="/login" render={(): React.ReactNode => <LoginContainer />} />
                    <Redirect from="/" exact to="/profile/" />
                    <Route path="*" render={(): React.ReactNode => <NotFound />} />
                </Switch>
            </div>
        </div>
    );
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({ initialized: getInitialized(state.app) });
const AppContainer: React.FC = compose(
    withRouter,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        initializeApp,
    }),
)(App) as React.FC;
const SamuraiJSApp: React.FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    );
};
export default SamuraiJSApp;
