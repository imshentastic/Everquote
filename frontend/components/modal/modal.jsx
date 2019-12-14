import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
// import NoteContainer from '../home/note';
import GreetingContainer from '../greeting/greeting_container';
// import HomeLogout from '../home/home_logout';
import HomeLogoutContainer from '../home/home_logout_container';
import NotebookIndexContainer from '../home/notebook_index_container';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    let ModalTypeBackground;
    let ModalTypeChild;

    switch (modal) {
        case 'logout':
            // component = <GreetingContainer />;
            component = <HomeLogoutContainer />;
            ModalTypeBackground="modal-background";
            ModalTypeChild="modal-child";

            break;
        case 'notebooks':
            component = <NotebookIndexContainer />;
            ModalTypeBackground="modal-background2";
            ModalTypeChild="modal-child2";
            break;
        default:
            return null;
    }

    return (
        <div className={`${ModalTypeBackground}`} onClick={closeModal}>
            <div className={`${ModalTypeChild}`} onClick={e => e.stopPropagation()}>
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
