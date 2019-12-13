import React from 'react';
import { Link } from 'react-router-dom';

const NotebookIndexItem = props => (
  <li>
    <div>
      <Link to={`/api/notebooks/${props.notebook.id}`}>{props.notebook.title}</Link>
    </div>
    <div>
      <Link to={`/api/notebooks/${props.notebook.id}`}>Edit</Link>
    </div>
    
    <button onClick={() => props.deleteNotebook(props.notebook.id)}>Delete Notebook</button>
  </li>
);

export default NotebookIndexItem;
