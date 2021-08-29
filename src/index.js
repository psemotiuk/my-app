import {addUser, state, subscribe, updateNewPostText} from './redux/state';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addUser={addUser} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );

}

subscribe(rerenderEntireTree);

rerenderEntireTree(state);
