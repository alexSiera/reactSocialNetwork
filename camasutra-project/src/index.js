import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";
 // let {getState} = store;
 // let state = getState();
const rerenderEntireTree = () => {
    ReactDOM.render(
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
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