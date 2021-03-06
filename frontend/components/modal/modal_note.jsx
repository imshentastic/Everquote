import React from 'react';
import {closeModal, closeCreateNotesModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import GreetingContainer from '../greeting/greeting_container';
// import HomeLogout from '../home/note/home_logout';
import HomeLogoutContainer from '../home/note/home_logout_container';
import NoteIndexContainer from '../home/note/note_index_container';
// import CreateNoteFormContainer from '../home/note/create_note_form_container';
// import EditNoteFormContainer from '../home/note/edit_note_form_container';

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
        // case 'logout':
        //     // component = <GreetingContainer />;
        //     component = <HomeLogoutContainer />;
        //     ModalTypeBackground="modal-background";
        //     ModalTypeChild="modal-child";
        //     clickAction=closeModal;
        //     break;
        
        
            //need to close Modal and open index, or index perist
        // case 'editNote':
        //     component = <EditNoteFormContainer/>;
        //     // component2 = null;
        //     ModalTypeBackground="modal-background5";
        //     ModalTypeChild="modal-child5";
        //     clickAction=closeModal;
        //     break;
            
        default:
            return null;
    }

    return (
        <>
            {/* <div className="modal-background4" onClick = {clickAction}> */}
            <div className="modal-child4" >
                    
                        {component2}
                    
                                
            </div>
                {/* </div> */}

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
