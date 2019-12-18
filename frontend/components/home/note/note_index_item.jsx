import React from 'react';
import { Link } from 'react-router-dom';



const NoteIndexItem = props => (
    
        <li className="modal-note-content-list">
              <Link to={`/api/notes/${props.note.id}/show`}>
          
                  <div className="modal-note-content-list-hr"></div>
                  
                  <Link className="modal-note-content-list-info-edit" to={`/api/notes/${props.note.id}/edit`}><h3>{props.note.heading}</h3></Link>

                  <h3 class="small">{props.note.body}</h3>
                  <Link to="/api/notes" className="modal-note-content-list-delete" onClick={() => props.deleteNote(props.note.id)}></Link>
              </Link>
            
        </li>
      );

export default NoteIndexItem;


