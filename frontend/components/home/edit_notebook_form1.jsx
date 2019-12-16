import React from 'react';
// import NotebookForm from './notebook_form';

class EditNotebookForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.notebook;

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
    // this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state);
    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { formAction, formType, deleteNotebook, closeModal, notebook } = this.props;
    // if (!notebook) return null;
    return (
      <div className="notebookform-edit">
        <div>i</div>
        <h2>NOTEBOOK INFO</h2>
        <h3>Overview</h3>

        <form onSubmit={this.handleSubmit}>
          <label>TITLE

          
            <input
                type='text'
                value={notebook.title}
                onChange={this.update('title')}
            />
          </label>
          <div>CREATOR:</div>
          <button className="notebookform-button-delete" onClick={deleteNotebook}>Delete notebook</button>

          <div>
            <button className="notebookform-button-cancel" onClick={closeModal}>Cancel</button>
            <button className="notebookform-button" >Save</button>
          </div>
        </form>
        
      </div>
    );
  }
}

export default EditNotebookForm;