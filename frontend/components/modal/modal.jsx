import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
// import NoteContainer from '../home/note';
import GreetingContainer from '../greeting/greeting_container';
// import HomeLogout from '../home/home_logout';
import HomeLogoutContainer from '../home/home_logout_container';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'logout':
            // component = <GreetingContainer />;
            component = <HomeLogoutContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );

}

const msp = state => {
    return {
        modal: state.ui.modal
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(Modal);
