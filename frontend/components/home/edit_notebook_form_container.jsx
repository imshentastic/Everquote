import React from 'react';
import { connect } from 'react-redux';
import NotebookForm from './notebook_form';
import { fetchNotebook, updateNotebook } from '../../actions/notebook_actions';

class EditNotebookForm extends React.Component {
    //componentDidMount() {
  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
  }

//   componentDidUpdate(prevProps) {
//     if (prevProps.match.params.notebookId !== this.props.match.params.notebookId) {
//       this.props.fetchNotebook(this.props.match.params.notebookId);
//     }
//   }



  render() {
    const { formAction, formType, notebook } = this.props;
    if (!notebook) return null;
    return (
      <NotebookForm
        formAction={formAction}
        formType={formType}
        notebook={notebook} />
    );
  }
}

const msp = (state, ownProps) => ({
  notebook: state.entities.notebooks[ownProps.match.params.notebookId],
  formType: 'Update Notebook'
});

const mdp = dispatch => ({
  fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
  formAction: notebook => dispatch(updateNotebook(notebook))
});

export default connect(msp, mdp)(EditNotebookForm);