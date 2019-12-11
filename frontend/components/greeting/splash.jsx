import {Link} from 'react-router-dom';
import React from 'react';

export default ({currentUser, logout}) => {

    return (
        <>
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
                    <img className="splash-main-img"src={window.splashImg} alt=""/>
                    
                </div>
            </div>
        </>
    )
}