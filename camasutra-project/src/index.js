import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
 // let {getState} = store;
 // let state = getState();
const rerenderEntireTree = () => {
    ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
, document.getElementById('root'));
}
store.dispatch({type:'ADD-POST'});
rerenderEntireTree(store.getState());
store.subscribe(() => {
    rerenderEntireTree(store.getState())
});
serviceWorker.unregister();


//API