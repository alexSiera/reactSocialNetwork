import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
 //,addPost, setPostValue,onDialogTextAreaSubmit,onDialogChange, subscribe
 // let {getState} = store;
 // let state = getState();
const rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)}

        />
    </BrowserRouter>, document.getElementById('root'));
}
store.dispatch({type:'ADD-POST'});
rerenderEntireTree(store.getState());
store.subscribe(() => {
    rerenderEntireTree(store.getState())
});
serviceWorker.unregister();


//API