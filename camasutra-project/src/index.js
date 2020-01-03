import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
const {getState,addPost, setPostValue,onDialogTextAreaSubmit,onDialogChange, subscribe} = store;
const state = getState();

const rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App state={state} addPost={addPost} onChange={setPostValue} onDialogChange={onDialogChange} onDialogTextAreaSubmit={onDialogTextAreaSubmit}/>
    </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
serviceWorker.unregister();
