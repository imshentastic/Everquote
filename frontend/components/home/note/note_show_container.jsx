import { connect } from 'react-redux';
import NoteShow from './note_show';
import { updateNote, fetchNote } from '../../../actions/note_actions';
import { withRouter } from 'react-router-dom';
import {closeModal} from '../../../actions/modal_actions';
import {fetchNotebooks} from '../../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    // notebooks: state.entities.notebooks,
    // notebooks: Object.values(state.entities.notebooks),
    notebooks: state.entities.notebooks,
    // notes: Object.values(state.entities.notes), 
    notes: state.entities.notes, 
    notebook: state.entities.notebooks[ownProps.match.params.notebookId],
    note: state.entities.notes[ownProps.match.params.noteId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNote: note => dispatch(updateNote(note)),
    fetchNote: noteId => dispatch(fetchNote(noteId)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    closeModal: () => dispatch(closeModal())
    
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow));
