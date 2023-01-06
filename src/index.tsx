import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

import {Provider} from "./StoreContext";
import {store} from "./redux/store";




let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));

}
rerenderEntireTree();

store.subscribe(rerenderEntireTree)