import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteNote, fetchNotes, fetchNote, updateNote} from '../../../actions/note_actions';
import { openModal, closeModal} from '../../../actions/modal_actions';
import NoteIndexItem from './note_index_item';

const mapStateToProps = state => {
    return {
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
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoteIndexItem));