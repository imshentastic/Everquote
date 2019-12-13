import {connect} from 'react-redux';
import {fetchNotebooks, deleteNotebook, updateNotebook, fetchNotebook} from '../../actions/notebook_actions';
import NotebookIndex from './notebook_index';

const mapStateToProps = (state, ownProps) => {
    // const notebooks = state.entities.notebooks[ownProps.match.params.notebookId];
    return {
        notebooks: Object.values(state.entities.notebooks)
        // notebooks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks()),
        fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
        deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
        updateNotebook: notebook => dispatch(updateNotebook(notebook))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);