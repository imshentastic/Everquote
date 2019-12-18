import {Link} from 'react-router-dom';
import React from 'react';
import HomeContainer from '../home/home_container';
import Splash from './splash';
import Dropdown from './dropdown';
import NoteIndexContainer from '../home/note/note_index_container';

export default ({currentUser, notebooks, logout, openModal, closeModal}) => {
    const greeting = currentUser ? (
        <div className="greetingwrapper">
            {/* <HomeContainer /> */}
            {/* <NoteIndexContainer /> */}
            <button className="logout" onClick={() => openModal('logout')}>Logout</button>
        </div>
    ) : (
        <>
            <div className="splash-nav-background">
                <div className="splash-nav">
                    <img className="splash-icon" src={window.penguinImg} alt="Penguin by sandra from the Noun Project" />
                    <h1 className="splash-nav-title">Everquote</h1>
                    <Dropdown />
                    <div className="arrow-down"></div>
                    <Link to='/signup'>
                        <button className="splash-nav-signup">Sign up
                        </button>
                    </Link>
                    <h5> or </h5>
                    <Link to='/login'>
                        <button className="splash-nav-login">Log in
                        </button>
                    </Link>
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