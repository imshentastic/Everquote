import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';
import { createNote } from '../../../actions/note_actions';
import {closeModal} from '../../../actions/modal_actions';


const msp = state => ({
  note: {
    title: ''
  },
  formType: 'Create note'
});

const mdp = dispatch => ({
  formAction: note => dispatch(createNote(note)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(NoteForm);