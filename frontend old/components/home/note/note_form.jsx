import React from 'react';
// import {useHistory} from "react-router-dom";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state);
    this.props.closeModal();
    // let history = useHistory();
    // useHistory.push('/');
    //close modal and force url here
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    return (
      <div className="noteform">
        
        <div> </div>
        <form className="noteform-form" onSubmit={this.handleSubmit}>

                <input
                    type='number'
                    value={this.state.notebookId}
                    onChange={this.update('notebook_id')}
                    placeholder="Type updated notebook_id"
                />

                <input
                    type='text'
                    value={this.state.heading}
                    onChange={this.update('heading')}
                    placeholder="Title your note"
                />
                <textarea
                    value={this.state.body}
                    onChange={this.update('body')}
                    placeholder="Drag files here or just start typing..."
                    cols="70"
                    rows="5"
                ></textarea>
                
      

            <div>
              <button className="noteform-button-cancel" onClick={this.props.closeModal}>Cancel</button>
              <button className="noteform-button" >{this.props.formType}</button>
            </div>
            
        </form>
      </div>
    );
  }
}

export default NoteForm;
