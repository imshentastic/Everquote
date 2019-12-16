import {Link} from 'react-router-dom';
import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import NoteIndexContainer from '../home/note/note_index_container';

export default ({currentUser, notebooks, logout, openModal, closeModal}) => {
    const home = (
        <>
            <div className="wrapper">
                <Link to="/" className="sidebar">
                    <img className="sidebar-icon" src={window.penguinImg} alt="Penguin" />
                    <button className="b1">x</button>
                    <button className="b1">x</button>
                    <button className="b1">x</button>
                    <button className="b1">x</button>
                    <button className="b2">o</button>
                    <button className="b2">o</button>
                    {/* <Link to={`/api/notebooks`}>o */}
                    <button className="b2" onClick={() => openModal('notebooks')}>o</button>
                    {/* </Link> */}
                    
                    <button className="b2">o</button>  
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