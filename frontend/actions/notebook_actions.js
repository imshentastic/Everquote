export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

import * as NotebookApiUtil from '../util/notebook_api_util';

const receiveNotebooks = notebooks => {
    return {
        type: RECEIVE_NOTEBOOKS,
        notebooks
    };
};

const receiveNotebook = notebook => {
    return {
        type: RECEIVE_NOTEBOOK,
        notebook
    };
};

const removeNotebook = notebookId => {
    return {
        type: REMOVE_NOTEBOOK,
        notebookId
    };
};

export const fetchNotebooks = () => dispatch => (
    NotebookApiUtil.fetchNotebooks()
        .then(notebooks => dispatch(receiveNotebooks(notebooks)))
);

export const fetchNotebook = (notebookId) => dispatch => (
    NotebookApiUtil.fetchNotebook(notebookId)
        .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const createNotebook = notebook => dispatch => (
    NotebookApiUtil.createNotebook(notebook)
        .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const updateNotebook = notebook => dispatch => {
    return(
    NotebookApiUtil.updateNotebook(notebook)
        .then(notebook => dispatch(receiveNotebook(notebook)))
    )
};

export const deleteNotebook = notebookId => dispatch => (
    NotebookApiUtil.deleteNotebook(notebookId)
        .then( () => dispatch(removeNotebook(notebookId)))
);