import React from 'react';
import NotebookIndexItem from './notebook_index_item';
// import GreetingContainer from '../greeting/greeting_container';
import CreateNotebookFormContainer from './create_notebook_form_container';


class NotebookIndex extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    componentDidMount() {
            this.props.fetchNotebooks();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.notebooks !== this.props.notebooks) {
    //         this.setState({ notebooks: this.props.notebooks });
    //     }
    //   }

    render() {
        const {notebooks, deleteNotebook, updateNotebook, openModal, closeModal} = this.props;
        return(
            <div className="modal-notebook-content">
                <h1>NOTEBOOKS</h1>
                <button className="create-notebook-button" onClick={() => openModal('createNotebook')}>C</button>
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
                        notebooks.map((notebook) => (
                            <NotebookIndexItem
                                notebook={notebook}
                                deleteNotebook={deleteNotebook}
                                updateNotebook={updateNotebook}
                                closeModal = {closeModal}
                                key={notebook.id*1}
                                //WHY??
                            />
                        ))
                    }
                </ul>
                {/* <CreateNotebookFormContainer/> */}
                {/* <Modal /> */}
                
            </div>
        );
    }
  
};

export default NotebookIndex;
