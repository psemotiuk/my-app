import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addUser, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addUser={addUser} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );

}
