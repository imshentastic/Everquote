import {Link} from 'react-router-dom';
import React from 'react';
import Dropdown from './dropdown';
import Splash from './splash';
import Footer from './footer';

export default ({currentUser, notebooks, logout, openModal, closeModal, toggleModal}) => {
    const greeting = currentUser ? (
        <div className="greetingwrapper">
            <div></div>
            <button className="logout" onClick={() => toggleModal('logout')}></button>
        </div>
    ) : (
        <>
            <div className="splash-nav-background">
                <div className="splash-nav">
                    <img className="splash-icon" src={window.penguinImg} alt="Penguin by sandra from the Noun Project" />
                    <h1 className="splash-nav-title">Everquote</h1>
                    <section></section>
                    {/* <Dropdown /> */}
                    {/* <div className="arrow-down"></div> */}
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
            <Footer />
        </>

    );

    return (
        <> 
            
            {greeting}
        </>
    )
}