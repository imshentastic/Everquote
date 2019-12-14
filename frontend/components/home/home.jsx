import {Link} from 'react-router-dom';
import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
// import NotebookIndexContainer from '../home/notebook_index_container';

export default ({currentUser, notebooks, logout, openModal, closeModal}) => {
    const home = (
        <>
            <div className="wrapper">
                <div className="sidebar">
                    <img className="sidebar-icon" src={window.penguinImg} alt="Penguin" />
                    <button className="b1">x</button>
                    <button className="b1">x</button>
                    <button className="b1">x</button>
                    <button className="b1">x</button>
                    <button className="b2">o</button>
                    <button className="b2">o</button>
                    <button className="b2" onClick={() => openModal('notebooks')}>o</button>
                    
                    <button className="b2">o</button>  
                </div>

                <div className="indexbar">
                    <div>*Notes*</div>
                    <div>Column</div>
                    <div>of</div>
                    <div>Notes</div>
                </div>

                <div className="taskbar">

                </div>
            
            </div>
        </>
    ); 
    return (
        <>
            {home}
        </>
    )
}