import React from 'react';
import {Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';

import Modal from './modal/modal';
import Dashboard from './home/dashboard';

import ShowNotebookContainer from './home/notebook/show_notebook_container';
import EditNotebookFormContainer from './home/notebook/edit_notebook_form';
import NotebookIndexContainer from './home/notebook/notebook_index_container';
// import CreateNotebookFormContainer from './home/notebook/create_notebook_form_container';

// import NoteShowContainer from "./home/note/note_show_container";
import EditNoteFormContainer from './home/note/edit_note_form';

// import NewNoteContainer from './home/note/new_note_container';

    class App extends React.Component {

        render() {
            return (
                <div onClick={ this.hideUserDropDown } className="app-wrapper">
                    <ProtectedRoute exact path="/api/notebooks" component={NotebookIndexContainer} />

                    <ProtectedRoute exact path="/api/notebooks/:notebookId" component={ShowNotebookContainer} />
                    <ProtectedRoute exact path="/api/notebooks/:notebookId/edit" component={EditNotebookFormContainer} />
                    {/* <ProtectedRoute exact path="/api/notes/:noteId" component={NoteShowContainer} /> */}
                    <ProtectedRoute exact path="/api/notes/:noteId/edit" component={EditNoteFormContainer} />

                    {/* <ProtectedRoute path="/" component={ShowNoteContainer} /> */}
                    {/* <ProtectedRoute path="/notes" component={NoteIndexContainer} /> */}
                    
                    <Modal />

                    
                    <Switch>
                        {/* <ProtectedRoute path='/notes' component={Dashboard} /> */}
                        <ProtectedRoute path='/' component={Dashboard} />
                        <AuthRoute exact path='/login' component={LoginContainer}/>
                        <AuthRoute exact path='/signup' component={SignupContainer}/>

                        <AuthRoute path='/' component={GreetingContainer} />

                        {/* <ProtectedRoute exact path="/api/notebooks" component={NotebookIndexContainer} /> */}
                        {/*<ProtectedRoute exact path="/api/notebooks/:notebookId/edit" component={EditNotebookFormContainer} /> */}

                    </Switch>
                </div>
            )
        }
    }
export default App;

//           <ProtectedRoute path="/tags/:tagName/notes/:noteId" component={ NotesContainer } />
//           <ProtectedRoute path="/tags/:tagName" component={ NotesContainer } />
//           <ProtectedRoute exact path="/tags" component={ NotesContainer } />
//           <ProtectedRoute path="/notebooks/:notebookId/notes/:noteId" component={ NotesContainer } />
//           <ProtectedRoute path="/notebooks/:notebookId" component={ NotesContainer } />
//           <ProtectedRoute exact path="/notebooks" component={ NotesContainer } />
//           <ProtectedRoute path="/notes/:noteId" component={ NotesContainer } />
//           <ProtectedRoute path="/notes" component={ NotesContainer } />
//           <ProtectedRoute path="/new-tag" component={ NotesContainer } />
//           <ProtectedRoute path="/new-notebook" component={ NotesContainer } />
//           <ProtectedRoute path="/new-note" component={ NotesContainer } />
//           <AuthRoute exact path="/" component={ SessionFormContainer } />
//           <AuthRoute exact path="/signin" component={ SessionFormContainer } />
//           <AuthRoute exact path="/signup" component={ SessionFormContainer } />
//         </Switch>
//       </div>
//     );
//   }
