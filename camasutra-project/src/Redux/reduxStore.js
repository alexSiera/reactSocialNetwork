import {combineReducers, createStore, applyMiddleware} from "redux";
import { reducer as formReducer } from 'redux-form'
import dialogsReducer from "./reducers/dialogsReducer";
import newsReducer from "./reducers/newsReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./reducers/appReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    profilePage: profileReducer,
    sidebarData: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,

})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
window.__store__ = store;
export default store;