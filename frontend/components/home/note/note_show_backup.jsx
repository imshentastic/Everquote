import React from 'react';
import { Link } from 'react-router-dom';
// import EditNoteForm from './edit_note_form';
// import NoteIndexItemContainer from '../note/note_index_item_container';

class NoteShow extends React.Component {
    constructor(props) {
        super(props);
    }
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.noteId !== this.props.match.params.noteId) {
      this.props.fetchNote(this.props.match.params.noteId);
    }
  }

  render() {
    const { note, notes, openModal, deleteNote, updateNote, closeModal } = this.props;

    let noteSelectItems, currentNote, noteTagIndex;
    currentNote = note;
    noteSelectItems = notes;
    
    if (!note) return null;

    return (
        <div>
            {/* <Link to="/" id="myModal" className="home-show-note">
            </Link> */}
            
            {/* <Link to={`/api/notes/${note.id}`} className="home-show-note-content"> */}
            <div className="home-show-note-content">
                <Link to={`/api/notes/${note.id}/edit`} className="edit-note-button" onClick={() => openModal('editNote')}>i</Link>
                {/* <button className="create-note-button" onClick={() => openModal('createNote')}>C</button> */}
                <h2>{note.heading}</h2>
                <h2>Share</h2>
          
                  
                  
                  
                
              
            </div>
            {/* </Link> */}
        
         </div>

    );
  }
}

export default NoteShow;
