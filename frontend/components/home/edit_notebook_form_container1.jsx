import { connect } from 'react-redux';
import EditNotebookForm from './edit_notebook_form';
import { fetchNotebook, updateNotebook, deleteNotebook } from '../../actions/notebook_actions';
import {closeModal} from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
  notebook: ownProps.match.params.notebookId
  // notebook: state.entities.notebooks[Object.keys(state.entities.notebooks)]
}};

//   const notebook = state.notebooks.find(notebook => notebook.id === ownProps.match.params.notebookId);

//   if (notebook) {
//     return { notebook }
//   } else {
//     return { notebook: {} }
//   }
// }

const mdp = dispatch => ({
  fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
  formAction: notebook => dispatch(updateNotebook(notebook)),
  deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(EditNotebookForm);