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
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        // e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.formAction(user);
    }

    handleDemoSubmit(e) {
        // e.preventDefault();
        // formAction = 'login';
        const user = {email:"hermionegranger@gmail.com",password:"hogwarts"}
        this.props.login(user);
    }

    render() {
        const altForm = this.props.formType === 'signup' ? (
            <div className="altform">
                <h2>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</h2>
                <h3>Already have an account?</h3>
                <div>
                    <Link to='/login'>Sign in</Link>
                </div>
            </div>
        ) : (
            <div className="altform">
                <label>
                    <input type="checkbox"/>
                    <span>Remember me for 30 days</span>
                </label>
                <h3>Don't have an account?</h3>
                <div>
                    <Link to='/signup'>Create account</Link>
                </div>
                
            </div>
        );

        
        return (
            <>
            <div className="sessionform-background">
            </div>
            <div className="sessionform-wrapper">
                <div className="sessionform">
                    <img className="sessionform-icon" src={window.penguinImg} alt="Penguin by sandra from the Noun Project" />
                    <h1>Everquote</h1>
                    <h2>Remember everything important.</h2>

                
                    
                    <button className="sessionform-button" onClick={this.handleDemoSubmit}>Continue with Demo User</button>
                    <form className="sessionform-form">

                        <div className="line">  
                            <div>or</div>  
                        </div>

                        <input
                            type="email"
                            name="textfield"
                            value={this.state.email}
                            onChange={this.update("email")}
                            placeholder="Email address"
                            required

                        />
                    
                    
                        <input
                            type="password"
                            name="textfield"
                            value={this.state.password}
                            onChange={this.update("password")}
                            placeholder="Password"
                            required

                        />
                        
                        {/* <button onClick={this.handleSubmit}>{this.props.formType}</button> */}
                        <button className="sessionform-button" onClick={this.handleSubmit}>Continue</button>
                    </form>

                    {altForm}
                    {this.props.errors.join(" | ")}
                </div>
                </div>
        </> 
        )
    }
}

export default SessionForm;