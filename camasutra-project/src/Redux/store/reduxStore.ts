import {combineReducers, createStore, applyMiddleware} from "redux";
import { reducer as formReducer } from 'redux-form'
import dialogsReducer from "../reducers/dialogs/dialogsReducer";
import newsReducer from "../reducers/news/newsReducer";
import profileReducer from "../reducers/profile/profileReducer";
import sidebarReducer from "../reducers/sidebar/sidebarReducer";
import usersReducer from "../reducers/users/usersReducer";
import authReducer from "../reducers/auth/authReducer";
import thunkMiddleware from 'redux-thunk'
import appReducer from "../reducers/app/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

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
