import React from 'react';
import CreateNotebookFormContainer from './notebook/create_notebook_form_container';
import NotebookIndexContainer from './notebook/notebook_index_container';

import NoteIndexContainer from './note/note_index_container';

import HomeContainer from './home_container';

// import NotesHeader from './notes_header';
// import NotesHeaderContainer from './notes_header_container';
// import NoteDetailContainer from './note_detail_container';

// import NotebookHeaderContainer from '../notebooks/notebook_header_container';


class Dashboard extends React.Component {

//   componentWillMount() {
//     if (this.props.match.params.notebookId) {
//       this.props.fetchNotesFromNotebook(this.props.match.params.notebookId);
//     } else {
//       this.props.fetchNotes();
//     }
//     // on render, need to fetch all notes into state, or if on a notebook page - fetch notes from specific notebook

//     if (this.props.match.params.noteId) {
//       this.props.fetchNote(this.props.match.params.noteId);
//     }
//     // fetch single note object if on a note page

//     if (this.props.location.pathname === '/new-notebook') {
//       this.createNotebook = true;
//     } else {
//       this.createNotebook = false;
//     }
//   }

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
                    <HomeContainer />
                </section>

                {/* { noteDetail }         */}
            </div>
        );
    }

}

export default Dashboard;
