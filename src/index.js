import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
//
// let posts = [
//     {id: 1, message: 'Hi, how are you?', likesCount: 10},
//     {id: 2, message: 'it\'s my first post', likesCount: 11},
//     {id: 3, message: 'it\'s my first post', likesCount: 11}
// ]
//
// let dialogsData = [
//     {id: 1, name: 'Yana'},
//     {id: 2, name: 'Taras'},
//     {id: 3, name: 'Yulia'},
//     {id: 4, name: 'Vasya'},
//     {id: 5, name: 'Vasya2'},
//     {id: 6, name: 'Vasya3'}
// ]
//
// let messagesData = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How are you?'},
//     {id: 3, message: 'Yo'},
//     {id: 4, message: 'Yo'}
// ]
ReactDOM.render(
    <React.StrictMode>

        <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
