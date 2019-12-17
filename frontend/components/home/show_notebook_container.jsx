import { connect } from 'react-redux';
import NotebookShow from './show_notebook';
import { fetchNotebook } from '../../actions/notebook_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const notebook = state.entities.notebooks[ownProps.match.params.notebookId];
    // const notebook = state.entities.notebooks[state.entities.notebooks.notebookId]
    return {
        notebook
//   notebook: state.entities.notebooks[ownProps.match.params.notebookId]
    };
};

const mapDispatchToProps = dispatch => ({
  fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);