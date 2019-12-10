import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.formAction(user);
    }

    render() {
        const altForm = this.props.formType === 'signup' ? (
            <div>
                <h2>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</h2>
                <h3>Already have an account?</h3>
                <Link to='/login'>Sign in</Link>
            </div>
        ) : (
            <div>
                <label>
                    <input type="checkbox"/>
                    <span class="checkmark">Remember me for 30 days</span>
                </label>
                <h3>Don't have an account?</h3>
                <Link to='/signup'>Create account</Link>
            </div>
        );
        return (
            <div class="sessionform-background">
                <div class="sessionform">
                    <img className="sessionform-icon" src="assets/penguin-icon.png" alt="Penguin by sandra from the Noun Project"></img>
                    <h1>Evernote</h1>
                    <h2>Remember everything important.</h2>

                    <h3>Demo user</h3>

                    <div class="line">  
                        <div>or</div>  
                    </div>
                    
                    <form className="sessionform-form">
                        
                        <input
                            type="text"
                            name="textfield"
                            value={this.state.email}
                            onChange={this.update("email")}
                            placeholder="Email"

                        />
                    
                    
                        <input
                            type="password"
                            name="textfield"
                            value={this.state.password}
                            onChange={this.update("password")}
                            placeholder="Password"

                        />
                        
                        {/* <button onClick={this.handleSubmit}>{this.props.formType}</button> */}
                        <button onClick={this.handleSubmit}>Continue</button>
                    </form>

                    {altForm}
                    {this.props.errors.join(" | ")}
                </div>
            </div>
        )
    }
}

export default SessionForm;