import React from 'react';
import CreateNotebookFormContainer from './notebook/create_notebook_form_container';
import NotebookIndexContainer from './notebook/notebook_index_container';

import NoteIndexContainer from './note/note_index_container';
import NoteShowContainer from './note/note_show_container';

import HomeContainer from './home_container';
import GreetingContainer from '../greeting/greeting_container';
// import ShowNoteContainer from './note/note_show_container';

// import NotesHeader from './notes_header';
// import NotesHeaderContainer from './notes_header_container';
// import NoteDetailContainer from './note_detail_container';

// import NotebookHeaderContainer from '../notebooks/notebook_header_container';


class Dashboard extends React.Component {


  //componentDidUpdate(prevProps, prevState, snapshot
  // We want to update state values with new props values. Method called when prop values change
  //componentWillReceiveProps will be not required if you do not store the props values in state and directly use this.props.keyName
    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== '/notes' && nextProps.location.pathname === '/notes') {
        this.props.fetchNotes();
        //   this.header = <NotesHeaderContainer />;
        }
        if (nextProps.match.params.noteId && this.props.match.params.noteId !== nextProps.match.params.noteId) {
        this.props.fetchNote(nextProps.match.params.noteId);
        }
        if (nextProps.match.params.notebookId && this.props.match.params.notebookId !== nextProps.match.params.notebookId) {
        this.props.fetchNotesFromNotebook(nextProps.match.params.notebookId);
        //   this.header = <NotebookHeaderContainer notebookId={ nextProps.match.params.notebookId } />;
        }
        
        if (nextProps.location.pathname === '/notebooks') {
            this.createNotebook = false;
            this.setState({
                notebooksOpen: true,
            });
        } else if (nextProps.location.pathname === '/new-notebook') {
            this.createNotebook = true;
            //   this.newTag = false;
        } else {
            //   this.newTag = false;
            this.createNotebook = false;
            this.setState({
                notebooksOpen: false,
        });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            notebooksOpen: false
        };
        // this.header = <NotesHeaderContainer />;
        // this.togglePanel = this.togglePanel.bind(this);
    }

    render() {
        const { notes, note, location } = this.props;
        let noteDetail, notebookIndex, createNotebook;

        // only during /new-notebook, new notebook creation:
        if (this.createNotebook) {
            createNotebook = <CreateNotebookFormContainer />;
        }
        
        
        const { notebooksOpen } = this.state;
        const notebookClassName = notebooksOpen ? 'notebooksPanel open' : 'notebooksPanel';
        
        if (notebookClassName) {
            notebookIndex = <NotebookIndexContainer classes={ notebookClassName } />;
        }
        
        return (
            <div className="notes-container">
               
                {/* { newNotebook } */}
                {/* { notebookIndex } */}
                <section className="notes-header-and-index">
                    { this.header }
                    <NoteIndexContainer />
                    <GreetingContainer />
                    <HomeContainer />
                    {/* <NoteShowContainer /> */}
                </section>

                {/* { noteDetail }         */}
            </div>
        );
    }

}

export default Dashboard;
