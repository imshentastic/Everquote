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
import CreateNotebookFormContainer from './home/notebook/create_notebook_form_container';

import NoteShowContainer from "./home/note/note_show_container";
import EditNoteFormContainer from './home/note/edit_note_form';

import NewNoteContainer from './home/note/new_note_container';
import NoteIndexContainer from './home/note/note_index_container';

    class App extends React.Component {

        render() {
            return (
                <div className="app-wrapper">

                    {/* <ProtectedRoute exact path="/api/notebooks/:notebookId" component={ShowNotebookContainer} /> */}
                    <ProtectedRoute exact path="/api/notebooks/:notebookId/edit" component={EditNotebookFormContainer} />
                    <ProtectedRoute exact path="/api/notes/:noteId/show" component={NoteShowContainer} />
                    <ProtectedRoute exact path="/api/notes/:noteId/edit" component={EditNoteFormContainer} />
                    <ProtectedRoute exact path="/api/create-notebook" component={CreateNotebookFormContainer} />
                    <ProtectedRoute exact path="/api/create-note" component={NewNoteContainer} />

                    <ProtectedRoute exact path="/api/notes" component={NoteIndexContainer} />
                    
                    <Modal />

                        <ProtectedRoute exact path="/api/notebooks" component={NotebookIndexContainer} />
                        <ProtectedRoute exact path="/api/notebooks/:notebookId" component={ShowNotebookContainer} />
                        <ProtectedRoute exact path='/' component={Dashboard} />
                        <ProtectedRoute exact path='/api/notebooks' component={Dashboard} />
                        <ProtectedRoute exact path='/api/notes' component={Dashboard} />
                        {/* <ProtectedRoute exact path='/api/notes/:noteId/edit' component={Dashboard} /> */}
                        {/* <ProtectedRoute exact path='/api/create-note' component={Dashboard} /> */}

                    <Switch>
                        <AuthRoute exact path='/' component={GreetingContainer} />
                        {/* <ProtectedRoute path='/notes' component={Dashboard} /> */}
                        <AuthRoute exact path='/login' component={LoginContainer}/>
                        <AuthRoute exact path='/signup' component={SignupContainer}/>

                        

                        {/* <ProtectedRoute exact path="/api/notebooks" component={NotebookIndexContainer} /> */}
                        {/*<ProtectedRoute exact path="/api/notebooks/:notebookId/edit" component={EditNotebookFormContainer} /> */}
                    </Switch>

                    

                
                </div>
            )
        }
    }
export default App;
