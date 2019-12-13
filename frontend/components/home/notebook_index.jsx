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
        const {notebooks, deleteNotebook, updateNotebook} = this.props;
        return(
            <div>
                <h1>Here are your notebooks:</h1>
                <ul>
                    {
                        notebooks.map((notebook) => (
                            <NotebookIndexItem
                                notebook={notebook}
                                deleteNotebook={deleteNotebook}
                                updateNotebook={updateNotebook}
                                key={notebook.id*1}
                                //WHY??
                            />
                        ))
                    }
                </ul>
                <CreateNotebookFormContainer/>
                {/* <Modal /> */}
                
            </div>
        );
    }
  
};

export default NotebookIndex;
