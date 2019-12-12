import React from 'react';
import NotebookIndexItem from './notebook_index_item';
// import GreetingContainer from '../greeting/greeting_container';

class NotebookIndex extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    componentWillMount() {
        this.props.fetchNotebooks();
    }

    render() {
        const {notebooks} = this.props;
        return(
            <div>
                <h1>Here are your notebooks:</h1>
                <ul>
                    {
                        notebooks.map(notebook => (
                            <NotebookIndexItem
                                notebook={notebook}
                                key={notebook.id}
                            />
                        ))
                    }
                </ul>
                
            </div>
        );
    }
  
};

export default NotebookIndex;
