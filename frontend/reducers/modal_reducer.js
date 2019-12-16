import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_MODAL, CLOSE_CREATE_NOTEBOOKS_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    case TOGGLE_MODAL:
      return state === null ? action.modal : null;
    // case CLOSE_CREATE_NOTEBOOKS_MODAL:
    //     return null;
    default:
      return state;
  }
}
