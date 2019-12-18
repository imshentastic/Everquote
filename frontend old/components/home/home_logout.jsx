


import React from 'react';
import {Link} from 'react-router-dom';
import Splash from '../greeting/splash';
import Dropdown from '../greeting/dropdown';
import GreetingContainer from '../greeting/greeting_container';
// import closeModal from '../../actions/modal_actions';


// import NotebookIndexContainer from '../home/notebook_index_container';

// export default ({currentUser, notebooks, logout, openModal, closeModal}) => {
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
            <div>
                <span>{currentUser.email}, you are logged in.</span>
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