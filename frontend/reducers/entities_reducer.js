import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import notebooksReducer from './notebooks_reducer';
import notesReducer from './notes_reducer';

export default combineReducers({
    users: usersReducer,
    notebooks: notebooksReducer,
    notes: notesReducer
});