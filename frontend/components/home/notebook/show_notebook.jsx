import React from 'react';
import { Link } from 'react-router-dom';
import EditNotebookForm from './edit_notebook_form';
import NoteIndexItem from '../note/note_index_item';

class NotebookShow extends React.Component {
    constructor(props) {
        super(props);

        this.state={};
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
    const { notebook, notebooks, openModal, deleteNote, updateNote, closeModal } = this.props;

    let notebookSelectItems, currentNotebook, noteTagIndex;
    currentNotebook = notebook;
    notebookSelectItems = notebooks;
    
    if (!notebook) return null;

    return (
        <div>
            {/* <Link to="/" id="myModal" className="home-show-notebook">
            </Link> */}
            
            {/* <Link to={`/api/notebooks/${notebook.id}`} className="home-show-notebook-content"> */}
            <div className="home-show-notebook-content">
                <Link to={`/api/notebooks/${notebook.id}/edit`} className="edit-notebook-button" onClick={() => openModal('editNotebook')}>i</Link>
                {/* <button className="create-notebook-button" onClick={() => openModal('createNotebook')}>C</button> */}
                <h1>{notebook.title}</h1>
                <h2>Share</h2>
            <h3>{notebook.notes.length} notes</h3>
                  
                  
                  
                
              
            </div>
            {/* </Link> */}
        
         </div>

    );
  }
}

export default NotebookShow;
