import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../../actions/session_actions';

const msp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "signup"
});

const mdp = (dispatch, ownProps) => ({
    formAction: formUser => dispatch(signup(formUser))
});

export default connect(msp, mdp)(SessionForm);