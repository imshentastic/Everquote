import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import NotebookIndexContainer from './home/notebook_index_container';
// import NotebookShowContainer from './'
import EditNotebookFormContainer from './home/edit_notebook_form_container';
import Modal from './modal/modal';


import {AuthRoute, ProtectedRoute} from '../util/route_util';

import {Route, Link, Switch} from 'react-router-dom';

const App = () => (
    <div>
        <Modal />
        <header>
            
            {/* <GreetingContainer /> */}
            {/* <Splash /> */}
        </header>
        <Switch>
            <AuthRoute path='/login' component={LoginContainer}/>
            <AuthRoute path='/signup' component={SignupContainer}/>
            {/* <ProtectedRoute path='/' component={SignupContainer} /> */}
            {/* <GreetingContainer /> */}
            <Route exact path='/' component={GreetingContainer} />
                {/* <Route exact path='/' component={Home} /> */}
                {/* <ProtectedRoute exact path='/api/notebooks' component={NotebookIndexContainer}/> */}
            {/* <ProtectedRoute exact path="/api/notebooks/:notebookId" component={NotebookShowContainer} /> */}
            <ProtectedRoute exact path="/api/notebooks/:notebookId" component={EditNotebookFormContainer} />
        </Switch>
    </div>
)

export default App;