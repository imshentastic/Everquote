import {Link} from 'react-router-dom';
import React from 'react';
import Splash from './splash';
import HomeContainer from '../home/home_container';
import Dropdown from './dropdown';
import NotebookIndexContainer from '../home/notebook_index_container';

export default ({currentUser, notebooks, logout, openModal, closeModal}) => {
    const greeting = currentUser ? (
        <div>
            
            {/* <HomeLogout currentUser={currentUser} logout={logout}/> */}
            <HomeContainer />
            {/* <NotebookIndexContainer notebooks={notebooks}/> */}
            
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