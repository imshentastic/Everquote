import {Link} from 'react-router-dom';
import React from 'react';
import Splash from './splash';
import Home from '../home/home';
import Dropdown from './dropdown';
import NotebookIndexContainer from '../home/notebook_index_container';

export default ({currentUser, notebooks, logout, openModal, closeModal}) => {
    const greeting = currentUser ? (
        <div>
            <img className="splash-icon" src={window.penguinImg} alt="Penguin by sandra from the Noun Project" />
            <Home />
            <NotebookIndexContainer notebooks={notebooks}/>
            {/* <span>{currentUser.email}, you are logged in.</span>
            <button onClick={logout}>Log Out</button> */}
            {/* &nbsp;
            &nbsp; */}
            <button onClick={() => openModal('logout')}>Logout</button>
            {/* <div onClick={closeModal} className="close-x">X</div> */}
        </div>
    ) : (
        <>
            
            <div className="splash-nav-background">
                <div className="splash-nav">
                    <img className="splash-icon" src={window.penguinImg} alt="Penguin by sandra from the Noun Project" />
                    <h1 className="splash-nav-title">Everquote</h1>
                    <Dropdown />
                    <div className="arrow-down"></div>
                    <button className="splash-nav-signup">
                        <Link to='/signup'>Sign up</Link>
                    </button>
                    <h5> or </h5>
                    <button className="splash-nav-login">
                        <Link to='/login'>Log in</Link>
                    </button>

 
                    
                </div>
            </div>
            
            <Splash />
            
        </>

    );

   


    return (
        <> 
            
            {greeting}
        </>
    )
}