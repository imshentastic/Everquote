import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';
import {openModal, closeModal, toggleModal} from '../../actions/modal_actions';

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
        toggleModal: (modal) => dispatch(toggleModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);