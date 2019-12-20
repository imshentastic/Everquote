import React from 'react';
import { connect } from 'react-redux';
import { fetchNotebook, updateNotebook, deleteNotebook } from '../../../actions/notebook_actions';
import {Link, withRouter} from 'react-router-dom';
import {closeModal} from '../../../actions/modal_actions';

class EditNotebookForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.notebook;
    


    this.handleClick = this.handleClick.bind(this);
  }
    //componentDidMount() {
  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
    // <Link to={`/api/notebooks/${this.props.notebook.id}`}></Link>
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleClick(e) {
    this.props.formAction(this.state);
    // this.props.closeModal();
    // this.props.history.push(`/notebooks/${notebook.id}`);
  }

  render() {
    const { formAction, formType, notebook, closeModal } = this.props;
    if (!notebook) return null;
    return (
      <div className="notebookform-edit-background">
        <div className="notebookform-edit">
          
          <h2>NOTEBOOK INFO</h2>
          
          <h3>Overview</h3>

          <form className = "notebookform-edit-container">
            <div className="notebookform-edit-div">
              <div>TITLE</div>
              <label className = "notebookform-edit-label">
              <span>
                <input
                  type='text'
                  // value={notebook.title}
                  onChange={this.update('title')}
                  placeholder={notebook.title}
                />
              </span>
              </label>
            </div>
            <h3>CREATOR:</h3>
            <h4>New notes are saved here unless you create them in another notebook.</h4>
            <button className="notebookform-edit-delete" onClick={this.props.deleteNotebook}>Delete notebook</button>
            

            <div>
              
              {/* <Link to={`/api/notebooks/${notebook.id}`}></Link> */}
                
              {/* </Link> */}
            </div>
          </form>
          <Link to={`/api/notebooks/${notebook.id}`}>
                <button className="notebookform-button-cancel">Cancel</button>
                <button className="notebookform-button" onClick={this.handleClick}>Save</button>
          </Link>
          
        </div>
      </div>
    );
  }
}

const msp = (state, ownProps) => ({
  notebook: state.entities.notebooks[ownProps.match.params.notebookId],
  formType: 'Update Notebook'
});

const mdp = dispatch => ({
  fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
  formAction: notebook => dispatch(updateNotebook(notebook)),
  closeModal: () => dispatch(closeModal()),
  deleteNotebook: notebook => dispatch(deleteNotebook(notebook))
});

export default withRouter(connect(msp, mdp)(EditNotebookForm));