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

const App = ({state, addPost}) => {
    const {posts, textAreaValue } = state.profilePage;
    const {dialogsData,messagesData } = state.dialogsPage;
    const {sidebarData} = state;
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebarData={sidebarData}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <Dialogs dialogsDatas={dialogsData} messagesDatas={messagesData}/>}/>
                    <Route path="/profile" render={() => <Profile postsData={posts} addPost={addPost} textAreaValue={textAreaValue}/>} />
                    <Route path="/music" component={Music} />
                    <Route path="/news" component={News} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
    );
};

export default App;
