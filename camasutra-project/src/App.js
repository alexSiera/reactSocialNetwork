import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer />

                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <DialogsContainer />}/>
                    <Route path="/profile" render={() => <ProfileContainer />} />
                    <Route path="/users" render={() => <UsersContainer/>} />
                    <Route path="/music" component={Music} />
                    <Route path="/news" render={() => <NewsContainer />} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
    );
};

export default App;
