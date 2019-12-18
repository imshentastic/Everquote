import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './note_form';
import { fetchNote, updateNote } from '../../../actions/note_actions';
import {Link} from 'react-router-dom';

class EditNoteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.note;
    

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

//   componentDidUpdate(prevProps) {
//     if (prevProps.match.params.noteId !== this.props.match.params.noteId) {
//       this.props.fetchNote(this.props.match.params.noteId);
//     }
//   }
  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state);
    // let history = useHistory();
    // useHistory.push('/');
    //close modal and force url here
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { formAction, formType, note } = this.props;
    if (!note) return null;
    return (
      <div className="noteform-edit-background">
        <div className="noteform-edit">
          <div>i</div>
          <h2>NOTE INFO</h2>
          <h3>Overview</h3>

          <form onSubmit={this.handleSubmit}>
            <label>TITLE

            
              <input
                  type='text'
                  // value={note.title}
                  onChange={this.update('title')}
                  placeholder={note.title}
              />
            </label>
            <div>CREATOR:</div>
            <h4>New notes are saved here unless you create them in another note.</h4>
            <button className="noteform-button-delete" onClick={this.props.deleteNote}>Delete note</button>
            <hr/>
            <h4>Share settings</h4>
            <h4>Sharing: Not Shared</h4>

            <div>
              <Link to={`/api/notes/${note.id}`}>
                <button className="noteform-button-cancel">Cancel</button>
              </Link>
              <button className="noteform-button" >Save</button>
            </div>
          </form>
          
        </div>
      </div>
    );
  }
}

const msp = (state, ownProps) => ({
  note: state.entities.notes[ownProps.match.params.noteId],
  formType: 'Update Note'
});

const mdp = dispatch => ({
  fetchNote: noteId => dispatch(fetchNote(noteId)),
  formAction: note => dispatch(updateNote(note))
});

export default connect(msp, mdp)(EditNoteForm);