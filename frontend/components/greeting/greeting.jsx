import {Link} from 'react-router-dom';
import React from 'react';

export default ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div>
            <span>{currentUser.email}, you are logged in.</span>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div class="logged-out-nav">
            <Link to='/signup' class="sign-up">Sign Up</Link>
            or
            <Link to='/login' class="sign-out">Login</Link>
        </div>
    );


    return (
        <>
            {greeting}
        </>
    )
}