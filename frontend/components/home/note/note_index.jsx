import React from 'react';
import NoteIndexItem from './note_index_item';

import CreateNoteFormContainer from './create_note_form_container';
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
                {/* <button className="create-note-button" onClick={() => openModal('createNote')}>C</button> */}
                
                <div></div>
                <ul >
                    {
                        notes.map((note, idx) => (
                            
                            <NoteIndexItem
                                note={note}
                                deleteNote={deleteNote}
                                updateNote={updateNote}
                                closeModal = {closeModal}
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
