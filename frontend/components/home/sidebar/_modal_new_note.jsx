// import React from 'react';
// import {closeModal} from '../../../actions/modal_actions';
// import {connect} from 'react-redux';
// import NoteContainer from '../home/note';

// function ModalNewNote({modal, closeModal}) {
//     if (!modal) {
//         return null;
//     }
//     let component;
//     switch (modal) {
//         case 'createnote':
//             component = <Note />;
//             break;
//         default:
//             return null;
//     }

//     return (
//         <div className="modal-background" onClick={closeModal}>
//             <div className="modal-child" onClick={e => e.stopPropagation()}>
//                 {component}
//             </div>
//         </div>
//     );

// }

// const msp = state => {
//     return {
//         modal: state.ui.modal
//     }
// }

// const mdp = dispatch => {
//     return {
//         closeModal: () => dispatch(closeModal())
//     }
// }

// export default connect(msp, mdp)(Modal);
