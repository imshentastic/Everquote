import { connect } from 'react-redux';
import NewNote from './new_note';
import { addNote } from '../../../actions/note_actions';
import { withRouter } from 'react-router-dom';
import {fetchNotebooks} from '../../../actions/notebook_actions';
import {closeModal, openModal} from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    // notebooks: Object.values(state.entities.notebooks),
    notebooks: state.entities.notebooks,
    notebook: state.entities.notebooks[ownProps.match.params.notebookId]
  };
};

const mdp = dispatch => {
  return {
    addNote: note => dispatch(addNote(note)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default withRouter(connect(
  msp,
  mdp
)(NewNote));
