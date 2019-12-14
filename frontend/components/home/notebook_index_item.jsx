import React from 'react';
import { Link } from 'react-router-dom';

const NotebookIndexItem = props => (
  <li className="modal-notebook-content-list">

      <Link to={`/api/notebooks/${props.notebook.id}`}>
        {props.notebook.title}
        <h4>notes</h4>
        <button className="modal-notebook-content-list-delete" onClick={() => props.deleteNotebook(props.notebook.id)}>D</button>
        <div className="modal-notebook-content-list-hr"></div>
      </Link>
      
    
      
  </li>
);

export default NotebookIndexItem;
