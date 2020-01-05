import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer />

                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <DialogsContainer />}/>
                    <Route path="/profile" render={() => <Profile />} />
                    <Route path="/music" component={Music} />
                    <Route path="/news" render={() => <NewsContainer />} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
    );
};

export default App;
