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
        <div className="splash-nav-background">
            <div className="splash-nav">
                <img className="splash-icon" src="assets/penguin-icon.png" alt="Penguin by sandra from the Noun Project"></img>
                <h1 className="splash-nav-title">Everquote</h1>
                <button className="splash-nav-signup">
                    <Link to='/signup'>Sign up</Link>
                </button>
                <h5> or </h5>
                <button className="splash-nav-login">
                    <Link to='/login'>Log in</Link>
                </button>
            </div>
        </div>
    );


    return (
        <>
            
            {greeting}
            <div className="splash-background">
                <div className="splash-main-text">
                    <div className="splash-main-head">
                        <h2>Your notes.</h2>
                        <h2>Organized.</h2>
                        <h2>Effortless</h2>
                    </div>
                    <h4 className="splash-main-body">Take notes anywhere. Find information faster. Share ideas with anyone. Meeting notes, web pages, projects, to-do lists—with Evernote as your note taking app, nothing falls through the cracks.</h4>
                    <button className="splash-main-signup">
                        <Link to='/signup' >SIGN UP FOR FREE</Link>
                    </button>
                    <img className="splash-main-img"src="assets/splash-vector.svg" alt=""/>
                    
                </div>
            </div>
        </>
    )
}