


import React from 'react';
import {Link} from 'react-router-dom';
import Splash from '../greeting/splash';
import Dropdown from '../greeting/dropdown';
import GreetingContainer from '../greeting/greeting_container';

export default class HomeLogout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit (e) {
        this.props.logout();
        this.props.closeModal();
    }

    
    render() {
        const {currentUser, closeModal} = this.props;
        const greeting = currentUser ? (
            <div className="logout-text">
                <span>{currentUser.email}</span>
                <button onClick={this.handleSubmit}>Log Out</button>
            </div>
        ) : (
            <>
                    <GreetingContainer />
            </>
        );
        return (
            <>
                {greeting}
            </>
        )
    }
   
}