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

const App = ({posts,dialogsData,messagesData}) => {
    const WrappedDialogs = function(props) {
        // Конструкция "{...props}" нужна, чтобы не потерять
        // параметры, переданные от компонента Route
        return (<Dialogs {...props} dialogsDatas={dialogsData} messagesDatas={messagesData}  />);
    };
    const WrappedProfile = function(props) {
        // Конструкция "{...props}" нужна, чтобы не потерять
        // параметры, переданные от компонента Route
        return (<Profile {...props} postsData={posts}  />);
    };
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" component={WrappedDialogs}/>
                    <Route path="/profile" component={WrappedProfile}/>
                    <Route path="/music" component={Music} />
                    <Route path="/news" component={News} />
                    <Route path="/settings" component={Settings} />
                    {/*<Profile />*/}
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
