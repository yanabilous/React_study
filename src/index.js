import React from 'react';
import reportWebVitals from './reportWebVitals';
import store  from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./index.css";



 let rerenderEntireTree;
rerenderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>,
    document.getElementById('root'));
}



rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
