import {connect} from 'react-redux';
import {fetchNotebooks} from '../../actions/notebook_actions';
import NotebookIndex from './notebook_index';

const mapStateToProps = (state) => {
    return {
        notebooks: Object.values(state.entities.notebooks)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);