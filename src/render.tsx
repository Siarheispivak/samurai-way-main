import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, StatePropsType, updateNewMessageText, updateNewPostText} from "./redux/State";
import React from "react";




export let rerenderEntireTree = (state:StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} addMessage={addMessage}/>
        </BrowserRouter>, document.getElementById('root'));
}
