import {Link} from 'react-router-dom';
import React from 'react';

export default ({currentUser, notebooks, logout, openModal, closeModal, toggleModal, location}) => {
    const routeNotebooks = (location.pathname === '/api/notebooks') ? (
        <Link to="/" >
            <button className="b7">
            </button>
        </Link>
     ) : ( 
        <Link to="/api/notebooks" >
            <button className="b7">
            </button>
        </Link>
     );

    return (
        <>
            <div className="wrapper">
                <Link to="/" className="sidebar">
                    <img className="sidebar-icon" src={window.penguinImg} alt="Penguin" />
                    <button className="b1" onClick={() => toggleModal('createNote')}></button>
                    <div></div>
                    <div></div>
                    <div></div>
                    
                    <Link to="/" ><button className="b6" onClick={() => closeModal()}></button></Link>

                    {routeNotebooks}
                   

                </Link>

            
            </div>
        </>
    )
}