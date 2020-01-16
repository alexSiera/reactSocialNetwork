import {combineReducers, createStore, applyMiddleware} from "redux";
import { reducer as formReducer } from 'redux-form'
import dialogsReducer from "./reducers/dialogsReducer";
import newsReducer from "./reducers/newsReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from 'redux-thunk'
const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    profilePage: profileReducer,
    sidebarData: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;