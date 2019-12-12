import {Link} from 'react-router-dom';
import React from 'react';
import Splash from './splash';
import Home from '../home/home';
import Dropdown from './dropdown';

export default ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div>
            {/* <img className="splash-icon" src="assets/penguin-icon.png" alt="Penguin by sandra from the Noun Project"></img> */}
            <img className="splash-icon" src={window.penguinImg} alt="Penguin by sandra from the Noun Project" />
            <Home />
            <span>{currentUser.email}, you are logged in.</span>
            <button onClick={logout}>Log Out</button>
            
        </div>
    ) : (
        <>
            
            <div className="splash-nav-background">
                <div className="splash-nav">
                    <img className="splash-icon" src={window.penguinImg} alt="Penguin by sandra from the Noun Project" />
                    <h1 className="splash-nav-title">Everquote</h1>
                    <Dropdown />
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