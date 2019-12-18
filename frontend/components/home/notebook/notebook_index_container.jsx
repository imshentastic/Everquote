import {connect} from 'react-redux';
import {fetchNotebooks, deleteNotebook, updateNotebook, fetchNotebook} from '../../../actions/notebook_actions';
import NotebookIndex from './notebook_index';
import {openModal, closeModal} from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // const notebooks = state.entities.notebooks[ownProps.match.params.notebookId];
    return {
        notebooks: Object.values(state.entities.notebooks)
        // noteboks: state.entities.notebooks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks()),
        fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
        deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
        updateNotebook: notebook => dispatch(updateNotebook(notebook)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(openModal())

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotebookIndex));