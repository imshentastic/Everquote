import React from 'react';
import NotebookIndexItem from './notebook_index_item';
// import GreetingContainer from '../greeting/greeting_container';
import CreateNotebookFormContainer from './create_notebook_form_container';
import {Link} from 'react-router-dom';


class NotebookIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
            this.props.fetchNotebooks();
    }
    
    handleClick() {
        this.props.history.push('/create-notebook');
    }

    render() {
        const {notebooks, deleteNotebook, updateNotebook, openModal, closeModal} = this.props;
        return(
            <Link to={`/api/notebooks`} className="modal-notebook-content">
                <h1>NOTEBOOKS</h1>
                <button className="create-notebook-button" onClick={() => openModal('createNotebook')}></button>
                {/* <button className="create-notebook-button" onClick={this.handleClick}>C</button> */}
                {/* <h2>Find a notebook</h2> */}
                <input
                    type='text'
                    // value={this.state.title}
                    // onChange={this.update('title')}
                    placeholder="Find a notebook"
                />
                <div></div>
                <ul >
                    {
                        notebooks.map((notebook, idx) => (
                            <NotebookIndexItem
                                notebook={notebook}
                                deleteNotebook={deleteNotebook}
                                updateNotebook={updateNotebook}
                                closeModal = {closeModal}
                                key={idx}
                            />
                        ))
                    }
                </ul>
                {/* <CreateNotebookFormContainer/> */}
                {/* <Modal /> */}
                
            </Link>
        );
    }
  
};

export default NotebookIndex;
