import {combineReducers, createStore} from "redux";
import dialogsReducer from "./reducers/dialogsReducer";
import newsReducer from "./reducers/newsReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    profilePage: profileReducer,
    sidebarData: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(reducers);
window.store = store;
export default store;