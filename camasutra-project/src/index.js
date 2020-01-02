import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state , {addPost, onDialogChange, onChange, onDialogTextAreaSubmit, subscribe} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
const rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App state={state} addPost={addPost} onChange={onChange} onDialogChange={onDialogChange} onDialogTextAreaSubmit={onDialogTextAreaSubmit}/>
    </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
serviceWorker.unregister();
