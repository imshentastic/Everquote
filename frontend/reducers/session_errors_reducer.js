import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

const _nullErrors = [];
export default (state = _nullErrors, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
            
        case RECEIVE_CURRENT_USER:
            return _nullErrors;

        // case CLEAR_ERRORS:
        //     return _nullErrors;

        default:
            return state;
    }

};