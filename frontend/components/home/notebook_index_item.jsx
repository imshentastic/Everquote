import React from 'react';
import { Link } from 'react-router-dom';

const NotebookIndexItem = props => (
  <li>
    <Link to={`/api/notebooks/${props.notebook.id}`}>{props.notebook.title}</Link>
    {/* <Link to={`/notebooks/${props.notebook.id}/edit`}>Edit</Link> */}
    {/* <button onClick={() => props.deleteNotebook(props.notebook.id)}>D</button> */}
  </li>
);

export default NotebookIndexItem;
