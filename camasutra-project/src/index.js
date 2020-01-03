import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
 //,addPost, setPostValue,onDialogTextAreaSubmit,onDialogChange, subscribe
 // let {getState} = store;
 // let state = getState();
const rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)}
             addPostActionCreator={store.addPostActionCreator.bind(store)}
             updatePostActionCreator={store.updatePostActionCreator.bind(store)}
             addDialogActionCreator={store.addDialogActionCreator.bind(store)} updateDialogActionCreator={store.updateDialogActionCreator.bind(store)}
             />
    </BrowserRouter>, document.getElementById('root'));
}
let rerender = () => {
    let state = store.getState();
    rerenderEntireTree(state)
}
store.dispatch({type:'ADD-POST'});
rerenderEntireTree(store.getState());
store.subscribe(rerender);
serviceWorker.unregister();


//API