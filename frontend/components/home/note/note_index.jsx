import React from 'react';
import NoteIndexItem from './note_index_item';
import {Link} from 'react-router-dom'


class NoteIndex extends React.Component {

    componentDidMount() {
            this.props.fetchNotes();
    }


    render() {
        const {notes, deleteNote, updateNote, openModal, closeModal} = this.props;
        return(
            <Link to="/api/notes" className="modal-note-content">
                <h1>NOTES</h1>
                
                <div></div>
                <ul >
                    {
                        notes.map((note, idx) => (
                            
                            <NoteIndexItem
                                note={note}
                                deleteNote={deleteNote}
                                updateNote={updateNote}
                                closeModal = {closeModal}
                                openModal = {openModal}
                                key={idx}
                            />
                        ))
                    }
                </ul>

                
            </Link>
        );
    }
  
};

export default NoteIndex;
