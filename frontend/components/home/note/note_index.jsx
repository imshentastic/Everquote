import React from 'react';
import NoteIndexItem from './note_index_item';
import {Link} from 'react-router-dom'


class NoteIndex extends React.Component {

    componentDidMount() {
            this.props.fetchNotes();
            // this.props.fetchNote(this.props.match.params.noteId);
            // debugger

            // this.props.fetchNote(this.props.match.params.noteId);
            // this.props.history.push(`/api/notes/${this.props.notes.id}/show`);

            
    }

    // constructor(props) {
    //     super(props);
        
    //     // this.props.fetchNote(this.props.match.params.noteId);
        
    //     // this.state = this.props.note;
    //     this.state = {
    //       // id: this.props.note.id,
    //         id: this.props.match.params.noteId,
    //         // heading: this.props.note.heading,
    //         // body: this.props.note.body,
    //         // notebook_id: this.notebookId
    //         heading: "",
    //         body: "",
    //         notebook_id: ""
            
    //     };
    //     if (this.props.note!== undefined) {
    //       this.notebookId = this.props.note.notebook_id;
    //     }


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
        // if (notesRev[0] !== undefined) {
        //     console.log(notesRev[0].id);
        //     this.props.history.push(`/api/notes/${notesRev[0].id}/show`);
        // }
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
