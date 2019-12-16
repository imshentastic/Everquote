import React from 'react';
import { Link } from 'react-router-dom';

const NotebookIndexItem = props => (
  <li className="modal-notebook-content-list">
      
      <Link to={`/api/notebooks/${props.notebook.id}`} id="myBtn">
    
      {/* <button className="modal-notebook-content-list-delete" onClick={() => {openModal('updateNotebook'), props.updateNotebook(props.notebook.id)}}>U</button> */}
        
        {props.notebook.title}
        <h4>notes</h4>
        <button className="modal-notebook-content-list-delete" onClick={() => props.deleteNotebook(props.notebook.id)}>D</button>
        <div className="modal-notebook-content-list-hr"></div>
      </Link>
      
    
      
  </li>
);

export default NotebookIndexItem;
//the myBtn is not working.. (modal.js, _home_show_notebook.scss)