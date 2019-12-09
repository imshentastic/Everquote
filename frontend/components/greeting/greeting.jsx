import {Link} from 'react-router-dom';
import React from 'react';

export default ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div>
            <span>{currentUser.email}, you are logged in.</span>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div className="logged-out-nav">
            <Link to='/signup' className="sign-up">Sign Up</Link>
            or
            <Link to='/login' className="sign-out">Login</Link>
        </div>
    );


    return (
        <>
            {greeting}
        </>
    )
}