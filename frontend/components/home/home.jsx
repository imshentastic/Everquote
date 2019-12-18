import {Link} from 'react-router-dom';
import React from 'react';

export default ({currentUser, notebooks, logout, openModal, closeModal, toggleModal}) => {
   
    return (
        <>
            <div className="wrapper">
                <Link to="/" className="sidebar">
                    <img className="sidebar-icon" src={window.penguinImg} alt="Penguin" />
                    <button className="b1" onClick={() => toggleModal('createNote')}></button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <button className="b5" onClick={() => toggleModal('starred')}>o</button>
            
                    
                    <button className="b6" onClick={() => toggleModal('notes')}></button>  
                    
                            
                    <button className="b7" onClick={() => toggleModal('notebooks')}></button>

                </Link>

            
            </div>
        </>
    )
}