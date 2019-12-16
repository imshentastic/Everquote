import React from 'react';
import NoteIndexItem from './note_index_item';

import CreateNoteFormContainer from './create_note_form_container';


class NoteIndex extends React.Component {

    componentDidMount() {
            // debugger
            this.props.fetchNotes();
    }


    render() {
        const {notes, deleteNote, updateNote, openModal, closeModal} = this.props;
        return(
            <div className="modal-note-content">
                <h1>NOTES</h1>
                <button className="create-note-button" onClick={() => openModal('createNote')}>C</button>
                {/* <h2>Find a note</h2> */}
                
                <div></div>
                <ul >
                    {
                        notes.map((note) => (
                            <NoteIndexItem
                                note={note}
                                deleteNote={deleteNote}
                                updateNote={updateNote}
                                closeModal = {closeModal}
                                key={note.id*1}

                            />
                        ))
                    }
                </ul>

                
            </div>
        );
    }
  
};

export default NoteIndex;
