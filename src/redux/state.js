let rerenderEntireTree = () => {
    console.log('State changed');

}

export const state = {
    users: ['John', 'Mike', 'Bill'],
    newPostText: ''
}

export const addUser = () => {
    state.users.push(state.newPostText);
    state.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.newPostText = newText;
    rerenderEntireTree(state);
}


export let subscribe = (observer) => {
    rerenderEntireTree = observer;
}

window.state = state;


