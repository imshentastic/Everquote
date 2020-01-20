import React from 'react';
import { Link } from 'react-router-dom';
// import {browserHistory} from 'react-router';

class NotebookIndexItem extends React.Component {
// const NotebookIndexItem = props => (
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }
  
  // handleClick(e) {
  //   debugger
  //   browserHistory.push(`/notebooks/${this.props.notebook.id}`);
  // //   .then(()=>this.props.history.push(`/notebooks/${this.props.notebook.id}`));
  // //   this.props.history.push(`/notebooks/${this.props.notebook.id}`);
  // }
  
  // handleDelete(event) {
  //   event.stopPropagation();
  //   this.props.deleteNotebook(notebook)
  //     .then(() => this.props.fetchNotebooks());
  // }   

  // handleDeleteNotebook(e) {
  //   this.props.deleteNotebook(this.state)
  //     .then(() => this.props.history.push('/api/notebooks'));
  //     // .then (()=>this.props.closeModal());
  //     // document.querySelector('.add-note').classList.add('hidden');
  // }

  render() {
    const { notebook } = this.props;
    return(
      <li className="modal-notebook-content-list">
        <Link to={`/api/notebooks/${notebook.id}`}>
   
        
          <h4>{notebook.title}</h4>
          <h5>{notebook.notes.length} notes</h5>
          <Link to="/api/notebooks" className="modal-notebook-content-list-delete" onClick={() => this.props.deleteNotebook(this.props.notebook.id)}></Link>
          {/* <button className="modal-notebook-content-list-delete" onClick={this.handleDeleteNotebook}></button> */}
          
          <div className="modal-notebook-content-list-hr"></div>
        </Link>
      </li>
    );
  }    
}   
  export default NotebookIndexItem;





