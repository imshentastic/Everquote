import React from 'react';
import { Link } from 'react-router-dom';
import EditNotebookForm from './edit_notebook_form';

class NotebookShow extends React.Component {
    constructor(props) {
        super(props);

        this.state={};
    }
  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
  }

//   componentDidUpdate(prevProps) {
//     if (prevProps.match.params.notebookId !== this.props.match.params.notebookId) {
//       this.props.fetchNotebook(this.props.match.params.notebookId);
//     }
//   }

  render() {
    const { notebook, openModal } = this.props;
    
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
                
              
            </div>
            {/* </Link> */}
        
         </div>

    );
  }
}

export default NotebookShow;
