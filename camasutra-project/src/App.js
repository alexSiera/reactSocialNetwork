import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = ({state, dispatch, actionCreatorFunctions}) => {

    const {posts, textAreaValue } = state.profilePage;
    const {sidebarData} = state;
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebarData={sidebarData}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <Dialogs messagesDatas={state.dialogsPage.messagesData} dialogsDatas={state.dialogsPage.dialogsData} dispatch={dispatch}  />}/>
                    <Route path="/profile" render={() => <Profile postsData={posts} textAreaValue={textAreaValue} dispatch={dispatch} />} />
                    <Route path="/music" component={Music} />
                    <Route path="/news" render={() => <News newsPage={state.newsPage} dispatch={dispatch} />} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
    );
};

export default App;
