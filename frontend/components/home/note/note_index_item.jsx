import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { deleteNote, fetchNotes, fetchNote, updateNote, openModal, closeModal } from '../../../actions/note_actions';

// const NoteIndexItem = props => {
    // return (
  class NoteIndexItem extends React.Component {
    
    constructor(props) {
      super(props);
    }

    render() {
      // debugger
      return (
        <li className="modal-note-content-list">
              <Link to={`/api/notes/${this.props.note.id}/show`}>
          
                  <div className="modal-note-content-list-hr"></div>
                  
                  <Link className="modal-note-content-list-info-edit" to={`/api/notes/${this.props.note.id}/edit`}><h3>{this.props.note.heading}</h3></Link>

                  <h3 class="small">{this.props.note.body}</h3>
                  <button className="modal-note-content-list-delete" onClick={() => this.props.deleteNote(this.props.note.id)}></button>
              </Link>
            
        </li>
      );
      }
    
  }

// export default NoteIndexItem;


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
