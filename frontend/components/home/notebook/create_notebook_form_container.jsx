import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import CreateNotebookForm from './create_notebook_form';
import { createNotebook } from '../../../actions/notebook_actions';
import {closeModal} from '../../../actions/modal_actions';


const msp = state => ({
  notebook: {
    title: ''
  },
  formType: 'Create notebook'
});

const mdp = dispatch => ({
  formAction: notebook => dispatch(createNotebook(notebook)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(CreateNotebookForm);