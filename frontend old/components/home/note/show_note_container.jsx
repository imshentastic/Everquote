import { connect } from 'react-redux';
import NoteShow from './show_note';
import { fetchNote } from '../../../actions/note_actions';
import {openModal, closeModal} from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const note = state.entities.notes[ownProps.match.params.noteId]
    // const note = state.entities.notes[state.entities.notes.noteId]
    return {
        note
//   note: state.entities.notes[ownProps.match.params.noteId]
    };
};

const mapDispatchToProps = dispatch => ({
  fetchNote: noteId => dispatch(fetchNote(noteId)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);