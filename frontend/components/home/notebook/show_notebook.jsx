import React from 'react';
import { Link } from 'react-router-dom';
import EditNotebookForm from './edit_notebook_form';
import NoteIndexItemContainer from '../note/note_index_item_container';

class NotebookShow extends React.Component {
    constructor(props) {
        super(props);
    }
  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.notebookId !== this.props.match.params.notebookId) {
      this.props.fetchNotebook(this.props.match.params.notebookId);
    }
  }

  render() {
    const { notebook, notebooks, openModal, deleteNote, updateNote, closeModal, notes } = this.props;

    // let notebookSelectItems, currentNotebook, noteTagIndex;
    // currentNotebook = notebook;
    // notebookSelectItems = notebooks;
    
    if (!notebook) return null;
    
    const relatedNotes = notebook.notes.map((noteId) => (
      <li className="modal-note-content-list-b">
          
          <Link className="modal-note-content-list-link-b" to={`/api/notes/${noteId}/show`}>
              <div className="modal-note-content-list-info-edit-b"><h3>{notes[noteId].heading}</h3></div>
              {/* <h4 className="modal-note-content-list-info-lastupdate">{ this.state.lastUpdate }</h4> */}
              <h3 className="small-b">{notes[noteId].body.replace(/<p>/g, "\n").replace(/<[^>]+>/g, "")}</h3>
            
          <div className="modal-note-content-list-hr-b"></div>
          </Link>
      </li>
  ))

    return (
        <div>
            {/* <Link to="/" id="myModal" className="home-show-notebook">
            </Link> */}
            
            {/* <Link to={`/api/notebooks/${notebook.id}`} className="home-show-notebook-content"> */}
            <div className="home-show-notebook-content">
                
                <Link to={`/api/notebooks/${notebook.id}/edit`} className="edit-notebook-button" onClick={() => openModal('editNotebook')}>i</Link>
                {/* <button className="create-notebook-button" onClick={() => openModal('createNotebook')}>C</button> */}
              
                <div>{notebook.title}</div>
                <h2>Share</h2>
            <h3>{notebook.notes.length} notes</h3>
            <section className="modal-note-content-list-space"></section>

                <ul>
                      {relatedNotes.reverse()}
                </ul>

            </div>

        
         </div>

    );
  }
}

export default NotebookShow;
