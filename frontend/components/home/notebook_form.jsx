import React from 'react';
// import {useHistory} from "react-router-dom";

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.notebook;
    

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

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

    return (
      <div className="sessionform">
        <h2>{this.props.formType} FORM</h2>
        <form className="sessionform-form" onSubmit={this.handleSubmit}>
            <label>
                <input
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="Title your notebook"
                />
            </label>

            
            <button className="sessionform-button" >{this.props.formType}</button>
        </form>
        {/* <form>
          <button className="sessionform-button-cancel" onClick={this.props.closeModal}>Cancel</button>
        </form> */}
      </div>
    );
  }
}

export default NotebookForm;
