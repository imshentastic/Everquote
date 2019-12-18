import { connect } from 'react-redux';
import NotebookShow from './show_notebook';
import { fetchNotebook } from '../../../actions/notebook_actions';
import {openModal, closeModal} from '../../../actions/modal_actions';
import {fetchNotes, deleteNote, updateNote, fetchNote} from '../../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
    const notebook = state.entities.notebooks[ownProps.match.params.notebookId];
    const notebooks = state.entities.notebooks;
    // const note = state.entities.notes[ownProps.match.params.notebook;
    
    return {
        notebook,
        notebooks
    };
};

const mapDispatchToProps = dispatch => ({
  fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  updateNote: note => dispatch(updateNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);