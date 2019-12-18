import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Home from './home';
import {withRouter} from 'react-router-dom';
import {openModal, closeModal, toggleModal} from '../../actions/modal_actions';
import {fetchNotebooks} from '../../actions/notebook_actions';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        toggleModal: modal => dispatch(toggleModal(modal)),
        fetchNotebooks: () => dispatch(fetchNotebooks())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));