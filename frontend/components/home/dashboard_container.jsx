import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchNote, fetchNotes } from '../../actions/note_actions';
import { fetchNotesFromNotebook } from '../../actions/notebook_actions';
// import { fetchNotesFromTag } from '../../actions/tag_actions';

const mapStateToProps = state => {
  return {
    notes: state.notes,
    note: state.note
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNote: noteId => dispatch(fetchNote(noteId)),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotesFromNotebook: notebookId => dispatch(fetchNotesFromNotebook(notebookId)),
    // fetchNotesFromTag: tagName => dispatch(fetchNotesFromTag(tagName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
