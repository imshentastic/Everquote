import React from 'react';
import { Link } from 'react-router-dom';

class NotebookIndexItem extends React.Component {
// const NotebookIndexItem = props => (
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }
  
  // handleClick(event) {
  //   this.props.history.push(`/notebooks/${notebook.id}`);
  // }
  
  // handleDelete(event) {
  //   event.stopPropagation();
  //   this.props.deleteNotebook(notebook)
  //     .then(() => this.props.fetchNotebooks());
  // }   

  render() {
    const { notebook } = this.props;
    return(
      <li className="modal-notebook-content-list">
        <Link to={`/api/notebooks/${notebook.id}`}>
   
        
          <h4>{notebook.title}</h4>
          {/* <h5>{notebook.notes.length} notes</h5> */}
          <Link to="/api/notebooks" className="modal-notebook-content-list-delete" onClick={() => this.props.deleteNotebook(this.props.notebook.id)}></Link>
          
          <div className="modal-notebook-content-list-hr"></div>
        </Link>
      </li>
    );
  }    
}   
  export default NotebookIndexItem;





