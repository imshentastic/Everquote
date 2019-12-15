import React from 'react';
import {closeModal, closeCreateNotebooksModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
// import NoteContainer from '../home/note';
import GreetingContainer from '../greeting/greeting_container';
// import HomeLogout from '../home/home_logout';
import HomeLogoutContainer from '../home/home_logout_container';
import NotebookIndexContainer from '../home/notebook_index_container';
import CreateNotebookFormContainer from '../home/create_notebook_form_container';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    let component2;
    let ModalTypeBackground;
    let ModalTypeChild;
    let clickAction;

    switch (modal) {
        case 'logout':
            // component = <GreetingContainer />;
            component = <HomeLogoutContainer />;
            ModalTypeBackground="modal-background";
            ModalTypeChild="modal-child";
            clickAction=closeModal;
            break;
        case 'notebooks':
            component = <NotebookIndexContainer />;
            ModalTypeBackground="modal-background2";
            ModalTypeChild="modal-child2";
            clickAction=closeModal;
            break;
        case 'createNotebook':
            component = <CreateNotebookFormContainer />;
            component2 = <NotebookIndexContainer />;
            ModalTypeBackground="modal-background3";
            ModalTypeChild="modal-child3";
            clickAction=closeModal;
            break;
        default:
            return null;
    }

    return (
        <>
            <div className={`${ModalTypeBackground}`} onClick = {clickAction}>
                <div className={`${ModalTypeChild}`} onClick={e => e.stopPropagation()}>
                    
    
                    {/* {component2} */}
                    {component}
                </div>
            </div>
            {/*  */}
        </>
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
