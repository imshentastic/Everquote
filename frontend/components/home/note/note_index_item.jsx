import React from 'react';
import { Link } from 'react-router-dom';

const NoteIndexItem = props => (
  <li className="modal-note-content-list">
      
      <Link to={`/api/notes/${props.note.id}`}>
        
        {props.note.heading}
        {props.note.body}
        {props.note.starred}

        <h4>notes</h4>
        <button className="modal-note-content-list-delete" onClick={() => props.deleteNote(props.note.id)}>D</button>
        <div className="modal-note-content-list-hr"></div>
      </Link>
      
    
      
  </li>
);

export default NoteIndexItem;
//the myBtn is not working.. (modal.js, _home_show_note.scss)