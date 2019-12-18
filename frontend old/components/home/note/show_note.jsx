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

  render() {
    const { note, openModal } = this.props;
    
    if (!note) return null;

    return (
        <div>
            
            
            
            {/* <Link to={`/api/notes/${note.id}`} className="home-show-note-content"> */}
            <div className="home-show-note-content">
              <h1>Edit your note here below</h1>
                
                <h1>{note.title}</h1>
                
                <h2>{note.body}</h2>
                
              
            </div>
            {/* </Link> */}
        
         </div>

    );
  }
}

export default NoteShow;
