import React from 'react';

// import {useHistory} from "react-router-dom";

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.notebook;
    

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleSubmit(e) {
    // e.preventDefault();
    this.props.formAction(this.state);
    this.props.closeModal();
    // this.props.history.push('/notebooks');
    // let history = useHistory();
    // useHistory.push('/');
    //close modal and force url here
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    return (
      <div className="notebookform">
        <img src={window.penguinImg} alt="Penguin" />
        <h2>{this.props.formType}</h2>
        <div> </div>
        <form className="notebookform-form" onSubmit={this.handleSubmit}>
            {/* <label> */}
                <input
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="Title your notebook"
                />
            {/* </label> */}

            <div>
              <button className="notebookform-button-cancel" onClick={this.props.closeModal}>Cancel</button>
              <button className="notebookform-button" >{this.props.formType}</button>
            </div>
            
        </form>
      </div>
    );
  }
}

export default NotebookForm;
