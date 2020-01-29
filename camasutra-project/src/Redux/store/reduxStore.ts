import {combineReducers, createStore, applyMiddleware} from "redux";
import { reducer as formReducer } from 'redux-form'

import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from "../reducers/app/reducers";
import authReducer from "../reducers/auth/reducers";
import dialogsReducer from "../reducers/dialogs/reducers";
import newsReducer from "../reducers/news/reducers";
import profileReducer from "../reducers/profile/reducers";
import sidebarReducer from "../reducers/sidebar/reducers";
import usersReducer from "../reducers/users/reducers";

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    profilePage: profileReducer,
    sidebarData: sidebarReducer,
    usersPage: usersReducer,
    form: formReducer,
});
export type AppState = ReturnType<typeof reducers>
export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(
        reducers,
        composeWithDevTools(middleWareEnhancer));
    return store;
}
