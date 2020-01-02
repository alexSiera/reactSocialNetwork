import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import {onChange} from "./Redux/state";


export const rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App state={state} addPost={addPost} onChange={onChange}/>
    </BrowserRouter>, document.getElementById('root'));
}

