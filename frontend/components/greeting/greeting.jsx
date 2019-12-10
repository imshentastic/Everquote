import {Link} from 'react-router-dom';
import React from 'react';
// import { Button } from 'react-toolbox';
// const ReactToolboxLink = withReactRouterLink(Button);
    

export default ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div>
            <span>{currentUser.email}, you are logged in.</span>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div className="splash-nav">
            <img className="splash-icon" src="assets/penguin-icon.png" alt="Penguin by sandra from the Noun Project"></img>
            <h1 className="splash-nav-title">Everquote</h1>
            <button className="splash-nav-signup">
                <Link to='/signup'>Sign Up</Link>
            </button>
            <h5> or </h5>
            <button className="splash-nav-login">
                <Link to='/login'>Login</Link>
            </button>
        </div>
    );


    return (
        <>
            
            {greeting}
            <div className="splash-main-text">
                <h2 className="splash-main-head">Your notes. Organized. Effortless</h2>
                <h4 className="splash-main-body">Take notes anywhere. Find information faster. Share ideas with anyone. Meeting notes, web pages, projects, to-do lists—with Evernote as your note taking app, nothing falls through the cracks.</h4>
                <button className="splash-main-signup">
                    <Link to='/signup' >SIGN UP FOR FREE</Link>
                </button>
                
            </div>
        </>
    )
}