import {Link} from 'react-router-dom';
import React from 'react';

export default ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div>
            <span>{currentUser.email}, you are logged in.</span>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
        </div>
    );


    return (
        <>
            {greeting}
        </>
    )
}