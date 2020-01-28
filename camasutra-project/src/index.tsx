
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJSApp from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <SamuraiJSApp />
    , document.getElementById('root'));

serviceWorker.unregister();
