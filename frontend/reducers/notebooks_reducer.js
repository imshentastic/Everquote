import {RECEIVE_NOTEBOOKS, REMOVE_NOTEBOOK, RECEIVE_NOTEBOOK} from '../actions/notebook_actions';


const defaultState = {
    allIds: [],
    byId: {}
  };

const notebooksReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NOTEBOOKS:

            return Object.assign({}, state, action.notebooks);

    //     case RECEIVE_NOTEBOOKS:
    //   nextState = Object.assign({}, defaultState);
    //   action.notebooks.forEach(notebook => {
    //     nextState.byId[notebook.id] = notebook;
    //     nextState.allIds.push(notebook.id);
    //   });
      return nextState;
        case RECEIVE_NOTEBOOK:
            return Object.assign({}, state, { [action.notebook.id]: action.notebook });
        case REMOVE_NOTEBOOK:
            let nextState = Object.assign({}, state);
            delete nextState[action.notebookId];
            return nextState;
        default:
            return state;
    }

};

export default notebooksReducer;