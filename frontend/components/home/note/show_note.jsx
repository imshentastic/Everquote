import React from 'react';
import { Link } from 'react-router-dom';
import EditNoteForm from './edit_note_form';

class NoteShow extends React.Component {
    constructor(props) {
        super(props);

        this.state={};
    }
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

//   componentDidUpdate(prevProps) {
//     if (prevProps.match.params.noteId !== this.props.match.params.noteId) {
//       this.props.fetchNote(this.props.match.params.noteId);
//     }
//   }

  render() {
    const { note, openModal } = this.props;
    
    if (!note) return null;

    return (
        <div>
            {/* <Link to="/" id="myModal" className="home-show-note">
            </Link> */}
            
            {/* <Link to={`/api/notes/${note.id}`} className="home-show-note-content"> */}
            <div className="home-show-note-content">
                <Link to={`/api/notes/${note.id}/edit`} className="edit-note-button" onClick={() => openModal('editNote')}>i</Link>
                {/* <button className="create-note-button" onClick={() => openModal('createNote')}>C</button> */}
                <h1>{note.title}</h1>
                <h2>Share</h2>
                
              
            </div>
            {/* </Link> */}
        
         </div>

    );
  }
}

export default NoteShow;
