import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import EditNotebookFormContainer from './home/edit_notebook_form';
import ShowNotebookContainer from './home/show_notebook_container';
import Modal from './modal/modal';
import NoteIndexContainer from './home/note/note_index_container';
import NotebookIndexContainer from './home/notebook_index_container';

import ShowNoteContainer from './home/note/show_note_container';
import EditNoteFormContainer from './home/note/edit_note_form';

import Home from './home/home';

import {AuthRoute, ProtectedRoute} from '../util/route_util';

import {Route, Switch} from 'react-router-dom';

const App = () => (
    <div className="app-wrapper">
                <ProtectedRoute exact path="/api/notebooks" component={NotebookIndexContainer} />

                <ProtectedRoute exact path="/api/notebooks/:notebookId" component={ShowNotebookContainer} />
                <ProtectedRoute exact path="/api/notebooks/:notebookId/edit" component={EditNotebookFormContainer} />
                <ProtectedRoute exact path="/api/notes/:noteId" component={ShowNoteContainer} />
                <ProtectedRoute exact path="/api/notes/:noteId/edit" component={EditNoteFormContainer} />

                <ProtectedRoute path="/" component={NoteIndexContainer} />
                
                <Modal />
                
        <Switch>
            <AuthRoute exact path='/login' component={LoginContainer}/>
            <AuthRoute exact path='/signup' component={SignupContainer}/>
            <Route exact path='/' component={GreetingContainer} />
            <Home />
                {/* <Route exact path='/' component={Home} /> */}
                    {/* <Modal/>
                        <HomeLogoutContainer />
                        <NotebookIndexContainer/>
                            <CreateNotebookFormContainer/>
                            <ShowNotebookContainer/>
                            <EditNotebookFormContainer/> */}
                {/* <Splash /> */}
            {/* <ProtectedRoute exact path="/api/notebooks" component={NotebookIndexContainer} /> */}
            {/*<ProtectedRoute exact path="/api/notebooks/:notebookId/edit" component={EditNotebookFormContainer} /> */}
        </Switch>
    </div>
)

export default App;