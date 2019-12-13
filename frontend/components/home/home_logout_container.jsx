import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import HomeLogout from './home_logout';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        // openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLogout);