import {Link} from 'react-router-dom';
import React from 'react';

class Home extends React.Component {
// export default ({currentUser, notebooks, logout, openModal, closeModal, toggleModal, location}) => {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.fetchNotebooks()
            .then(() => this.props.history.push('/api/create-note'));
      }

    render () {
        const {currentUser, notebooks, logout, openModal, closeModal, toggleModal, location, fetchNotebooks} = this.props;
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
                        <button className="b1" onClick={this.handleClick}></button>
                        <div></div>
                        <div></div>
                        <div></div>
                        
                        <Link to="/" ><button className="b6" onClick={() => closeModal()}></button></Link>

                        {routeNotebooks}
                    

                    </Link>

                
                </div>
            </>
        )
}}

export default Home;