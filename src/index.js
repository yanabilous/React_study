import React from 'react';

import reportWebVitals from './reportWebVitals';
import state, {addPost, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


 let rerenderEntireTree;
rerenderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,
    document.getElementById('root'));
}



rerenderEntireTree(state);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
