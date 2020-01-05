import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";

const App = (props) => {
    const {sidebarData} = props.state;
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebarData={sidebarData}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <DialogsContainer store={props.store}  />}/>
                    <Route path="/profile" render={() => <Profile store={props.store} />} />
                    <Route path="/music" component={Music} />
                    <Route path="/news" render={() => <NewsContainer store={props.store} />} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
    );
};

export default App;
