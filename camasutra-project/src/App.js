import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = ({state}) => {
    const {posts } = state.profilePage;
    const {dialogsData,messagesData } = state.dialogsPage;
    const {sidebarData} = state;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebarData={sidebarData}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <Dialogs dialogsDatas={dialogsData} messagesDatas={messagesData}/>}/>
                    <Route path="/profile" render={() => <Profile postsData={posts}/>} />
                    <Route path="/music" component={Music} />
                    <Route path="/news" component={News} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
