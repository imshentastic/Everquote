import { connect } from 'react-redux';
import NoteShow from './note_show';
import {openModal, closeModal} from '../../../actions/modal_actions';
import {fetchNotes, deleteNote, updateNote, fetchNote} from '../../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
    const note = state.entities.notes[ownProps.match.params.noteId];
    const notes = state.entities.notes;
    // const note = state.entities.notes[ownProps.match.params.notebook;
    
    return {
        note,
        notes
    };
};

const mapDispatchToProps = dispatch => ({
  fetchNote: noteId => dispatch(fetchNote(noteId)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  updateNote: note => dispatch(updateNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);