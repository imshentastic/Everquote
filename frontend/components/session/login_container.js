import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, clearErrors} from '../../actions/session_actions';

const msp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "login"
});

const mdp = (dispatch, ownProps) => ({
    formAction: formUser => dispatch(login(formUser)),
    login: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors())

});

export default connect(msp, mdp)(SessionForm);