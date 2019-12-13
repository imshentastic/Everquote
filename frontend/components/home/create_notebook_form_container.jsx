import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import NotebookForm from './notebook_form';
import { createNotebook } from '../../actions/notebook_actions';


const msp = state => ({
  notebook: {
    title: ''
  },
  formType: 'Create Notebook'
});

const mdp = dispatch => ({
  formAction: notebook => dispatch(createNotebook(notebook))
});

export default connect(msp, mdp)(NotebookForm);