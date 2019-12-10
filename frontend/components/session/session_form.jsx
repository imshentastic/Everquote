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
        const form = this.props.formType === 'signup' ? (
            <div>
                <h1>Sign Up</h1>
                <Link to='/login'>Login instead</Link>
            </div>
        ) : (
            <div>
                <h1>Log In</h1>
                <Link to='/signup'>Sign up instead</Link>
            </div>
        );
        return (
            <div>
                {this.props.errors.join(" | ")}
                {form}
                <form>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;