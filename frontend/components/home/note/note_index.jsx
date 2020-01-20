import React from 'react';
import NoteIndexItem from './note_index_item';
import {Link} from 'react-router-dom'


class NoteIndex extends React.Component {

    componentDidMount() {
            this.props.fetchNotes();
            // this.props.fetchNote(this.props.match.params.noteId);
    }


    render() {
        const {notes, deleteNote, updateNote, openModal, closeModal} = this.props;
        // compare function to adjust list of notes based on last updated
        function compare(a,b) {
            const noteA = a.updated_at;
            const noteB = b.updated_at;
            let comparison = 0;
            if (noteA > noteB) {
                comparison = -1;
            } else if (noteA < noteB) {
                comparison = 1;
            }
            return comparison;
        }
        const notesRev = notes.sort(compare);
        return(
            <Link to="/api/notes" className="modal-note-content">
                <h1>NOTES</h1>
                <h2>{notes.length} notes</h2>
                <div></div>
                <ul className="note-column-reverse">
                    {
                        notesRev.map((note) => (
                            
                            <NoteIndexItem
                                note={note}
                                deleteNote={deleteNote}
                                updateNote={updateNote}
                                closeModal = {closeModal}
                                openModal = {openModal}
                                key={note.id}
                            />
                        ))
                    }
                </ul>

                
            </Link>
        );
    }
  
};

export default NoteIndex;
