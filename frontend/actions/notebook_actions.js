export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
// export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
// export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
// export const CLEAR_ERRORS = "CLEAR ERRORS";

import * as NotebookApiUtil from '../util/notebook_api_util';

const receiveNotebooks = notebooks => {
    return {
        type: RECEIVE_NOTEBOOKS,
        notebooks
    };
};

export const fetchNotebooks = () => dispatch => (
    NotebookApiUtil.fetchNotebooks()
        .then(notebooks => dispatch(receiveNotebooks(notebooks)))
);