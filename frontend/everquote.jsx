import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {signup, login, logout} from './actions/session_actions';
import {fetchNotebooks, createNotebook, deleteNotebook} from './actions/notebook_actions';
import {fetchNotes, createNote, deleteNote} from './actions/note_actions';


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    // const store = configureStore();

    ReactDOM.render(<Root store={store} />, root);

    //testing
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    // window.fetchNotebooks = fetchNotebooks;
    // window.createNotebook = createNotebook;
    // window.deleteNotebook = deleteNotebook;
    // window.createNote = createNote;
});