import React from 'react';
// import NoteForm from './note_form';

class EditNoteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.note;

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
    // this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state);
    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { formAction, formType, deleteNote, closeModal, note } = this.props;
    // if (!note) return null;
    return (
      <div className="noteform-edit">
        <div>i</div>
        <h2>NOTE INFO</h2>
        <h3>Overview</h3>

        <form onSubmit={this.handleSubmit}>
          <label>TITLE

          
            <input
                type='text'
                value={note.title}
                onChange={this.update('title')}
            />
          </label>
          <div>CREATOR:</div>
          <button className="noteform-button-delete" onClick={deleteNote}>Delete note</button>

          <div>
            <button className="noteform-button-cancel" onClick={closeModal}>Cancel</button>
            <button className="noteform-button" >Save</button>
          </div>
        </form>
        
      </div>
    );
  }
}

export default EditNoteForm;