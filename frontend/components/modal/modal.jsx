import React from 'react';

import {closeModal, closeCreateNotebooksModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';

import HomeLogoutContainer from '../home/home_logout_container';
import NotebookIndexContainer from '../home/notebook/notebook_index_container';
import CreateNotebookFormContainer from '../home/notebook/create_notebook_form_container';
// import CreateNoteFormContainer from '../home/note/create_note_form_container';
import NoteIndexContainer from '../home/note/note_index_container';
import ShowNoteContainer from '../home/note/note_show_container';
import NewNoteContainer from '../home/note/new_note_container';

// import EditNotebookFormContainer from '../home/edit_notebook_form_container';

// import ShowStarredContainer from '../home/show_starred_container';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    // let component2;
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
        case 'createNotebook':
            component = <CreateNotebookFormContainer />;
            // component2 = <NotebookIndexContainer />;
            ModalTypeBackground="modal-background3";
            ModalTypeChild="modal-child3";
            clickAction=closeModal;
            break;
        case 'createNote':
            component = <NewNoteContainer />;
            // component2 = <NoteIndexContainer />;
            ModalTypeBackground="modal-background3";
            ModalTypeChild="modal-child3";
            clickAction=closeModal;
            break;

        case 'shownote':
            component = <ShowNoteContainer/>;
            // component2 = null;
            ModalTypeBackground="modal-background4";
            ModalTypeChild="modal-child4";
            clickAction=closeModal;
            break;
            
        default:
            return null;
    }

    return (
        <>
            <div className={`${ModalTypeBackground}`} onClick = {clickAction}>
                <div className={`${ModalTypeChild}`} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
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
