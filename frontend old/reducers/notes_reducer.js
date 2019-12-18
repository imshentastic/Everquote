import {RECEIVE_NOTES, REMOVE_NOTE, RECEIVE_NOTE} from '../actions/note_actions';

const notesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NOTES:
            // return action.notes;
            return Object.assign({}, state, action.notes);
        case RECEIVE_NOTE:
            return Object.assign({}, state, { [action.note.id]: action.note });
        case REMOVE_NOTE:
            let nextState = Object.assign({}, state);
            delete nextState[action.noteId];
            return nextState;
        default:
            return state;
    }

};

export default notesReducer;