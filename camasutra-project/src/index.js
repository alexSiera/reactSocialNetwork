import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const posts = [{
    id: 1,
    message: "Hi how are you ?",
    likesCount: 12
}, {
    id: 2,
    message: "It's my first post",
    likesCount: 11
}, {
    id: 3,
    message: "Blabla",
    likesCount: 13
}, {
    id: 4,
    message: "Dada",
    likesCount: 15
}];

const dialogsData = [{
    id: 1,
    name: "Dimych"
}, {
    id: 2,
    name: "Alex"
}, {
    id: 3,
    name: "Anya"
}, {
    id: 4,
    name: "Killer"
}];
const messagesData = [{
    id: 1,
    message: "Ok!",
    likesCount: 12,
}, {
    id: 2,
    message: "Sure!",
    likesCount: 12,
}, {
    id: 3,
    message: "Hi dos",
    likesCount: 12,
}, {
    id: 4,
    message: "Killer",
    likesCount: 12,
}];

ReactDOM.render(<App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
