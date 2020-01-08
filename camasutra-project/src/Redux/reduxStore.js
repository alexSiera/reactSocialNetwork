import {combineReducers, createStore} from "redux";
import dialogsReducer from "./reducers/dialogsReducer";
import newsReducer from "./reducers/newsReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    profilePage: profileReducer,
    sidebarData: sidebarReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);
export default store;