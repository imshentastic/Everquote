import {connect} from 'react-redux';
import {fetchNotes, deleteNote, updateNote, fetchNote} from '../../../actions/note_actions';
import NoteIndex from './note_index';
import {openModal, closeModal} from '../../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // const notes = state.entities.notes[ownProps.match.params.noteId];
    return {
        notes: Object.values(state.entities.notes),
        // note: state.entities.notes[ownProps.match.params.noteId]
    };
};

const mapDispatchToProps = dispatch => {

    return {
        fetchNotes: () => dispatch(fetchNotes()),
        fetchNote: noteId => dispatch(fetchNote(noteId)),
        deleteNote: noteId => dispatch(deleteNote(noteId)),
        updateNote: note => dispatch(updateNote(note)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(openModal())

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteIndex));