import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App state={state} addPost={addPost}/>
    </BrowserRouter>, document.getElementById('root'));
}

