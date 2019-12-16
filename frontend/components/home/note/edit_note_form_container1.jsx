import { connect } from 'react-redux';
import EditNoteForm from './edit_note_form';
import { fetchNote, updateNote, deleteNote } from '../../../actions/note_actions';
import {closeModal} from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
  note: ownProps.match.params.noteId
  // note: state.entities.notes[Object.keys(state.entities.notes)]
}};

//   const note = state.notes.find(note => note.id === ownProps.match.params.noteId);

//   if (note) {
//     return { note }
//   } else {
//     return { note: {} }
//   }
// }

const mdp = dispatch => ({
  fetchNote: noteId => dispatch(fetchNote(noteId)),
  formAction: note => dispatch(updateNote(note)),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(EditNoteForm);