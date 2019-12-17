import {Link} from 'react-router-dom';
import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import NoteIndexContainer from '../home/note/note_index_container';

export default ({currentUser, notebooks, logout, openModal, closeModal, toggleModal}) => {
    const home = (
        <>
            <div className="wrapper">
                <Link to="/" className="sidebar">
                    <img className="sidebar-icon" src={window.penguinImg} alt="Penguin" />
                    <button className="b1" onClick={() => openModal('createNote')}></button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <button className="b5" onClick={() => toggleModal('starred')}>o</button>
            
                    
                    <button className="b6" onClick={() => closeModal()}></button>  
                    
                            
                    <button className="b7" onClick={() => toggleModal('notebooks')}></button>

                    
                    <button className="b8">o</button>  
                </Link>

                <Link to="/" className="indexbar">
                    {/* <Link to="/api/notes"></Link> */}
                    {/* <NoteIndexContainer /> */}
                </Link>

                <Link to="/" className="taskbar">

                </Link>
            
            </div>
        </>
    ); 
    return (
        <>
            {home}
        </>
    )
}