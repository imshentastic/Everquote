import { connect } from 'react-redux';
import NotebookIndexItem from './notebooks_index_item';
import { withRouter } from 'react-router-dom';
import { deleteNotebook, fetchNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNotebook: notebook => dispatch(deleteNotebook(notebook)),
    fetchNotebooks: () => dispatch(fetchNotebooks())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndexItem));
