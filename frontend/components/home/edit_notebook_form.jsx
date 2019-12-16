import React from 'react';
import { connect } from 'react-redux';
import NotebookForm from './notebook_form';
import { fetchNotebook, updateNotebook } from '../../actions/notebook_actions';
import {Link, withRouter, Redirect} from 'react-router-dom';
import {closeModal} from '../../actions/modal_actions';

class EditNotebookForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.notebook;
    

    this.handleSubmit = this.handleSubmit.bind(this);
  }
    //componentDidMount() {
  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
    <Link to={`/api/notebooks/${this.props.notebook.id}`}></Link>
  }

//   componentDidUpdate(prevProps) {
//     if (prevProps.match.params.notebookId !== this.props.match.params.notebookId) {
//       this.props.fetchNotebook(this.props.match.params.notebookId);
//     }
//   }
  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state);
    this.props.closeModal();
    // let history = useHistory();
    // useHistory.push('/');
    //close modal and force url here
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { formAction, formType, notebook, closeModal } = this.props;
    if (!notebook) return null;
    return (
      <div className="notebookform-edit-background">
        <div className="notebookform-edit">
          <div>i</div>
          <h2>NOTEBOOK INFO</h2>
          <h3>Overview</h3>

          <form >
            <label>TITLE
              <input
                  type='text'
                  // value={notebook.title}
                  onChange={this.update('title')}
                  placeholder={notebook.title}
              />
            </label>
            <div>CREATOR:</div>
            <h4>New notes are saved here unless you create them in another notebook.</h4>
            {/* <button className="notebookform-button-delete" onClick={this.props.deleteNotebook}>Delete notebook</button> */}
            <hr/>
            <h4>Share settings</h4>
            <h4>Sharing: Not Shared</h4>

            <div>
              
              {/* <Link to={`/api/notebooks/${notebook.id}`}></Link> */}
                
              {/* </Link> */}
            </div>
          </form>
          <Link to={`/api/notebooks/${notebook.id}`}>
                <button className="notebookform-button-cancel">Cancel</button>
                <button className="notebookform-button" onClick={this.handleSubmit}>Save</button>
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
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(EditNotebookForm);