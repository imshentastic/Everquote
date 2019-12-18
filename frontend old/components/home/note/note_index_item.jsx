import React from 'react';
import { Link } from 'react-router-dom';

const NoteIndexItem = props => (
  
  
  <li className="modal-note-content-list">
      
      <Link to={`/api/notes/${props.note.id}`}>
        <div className="modal-note-content-list-hr"></div>
        <h3>{props.note.heading}</h3>
        {/* <h3 class="small">{props.note.updated_at}</h3> */}
        {/* <h3 class="small">{props.note.starred}</h3> */}

        <h3 class="small">{props.note.body}</h3>
        <button className="modal-note-content-list-delete" onClick={() => props.deleteNote(props.note.id)}></button>
        
        
      </Link>
      
  </li>
);

export default NoteIndexItem;
//the myBtn is not working.. (modal.js, _home_show_note.scss)