import './index.css';
import state, {subscribe} from "./redux/State"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, StatePropsType, updateNewMessageText, updateNewPostText} from "./redux/State";
import React from "react";




let rerenderEntireTree = () => {
    console.log(state)
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} addMessage={addMessage}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();

subscribe(rerenderEntireTree)