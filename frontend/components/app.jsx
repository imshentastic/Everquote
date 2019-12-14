import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import EditNotebookFormContainer from './home/edit_notebook_form_container';
import Modal from './modal/modal';

import {AuthRoute, ProtectedRoute} from '../util/route_util';

import {Route, Switch} from 'react-router-dom';

const App = () => (
    <div>
        <Modal />
        <Switch>
            <AuthRoute path='/login' component={LoginContainer}/>
            <AuthRoute path='/signup' component={SignupContainer}/>
            <Route exact path='/' component={GreetingContainer} />
                {/* <Route exact path='/' component={Home} /> */}
                    {/* <Modal/>
                        <HomeLogoutContainer />
                        <NotebookIndexContainer/> */}
                {/* <Splash /> */}
            {/* <ProtectedRoute exact path="/api/notebooks/:notebookId" component={NotebookShowContainer} /> */}
            <ProtectedRoute exact path="/api/notebooks/:notebookId" component={EditNotebookFormContainer} />
        </Switch>
    </div>
)

export default App;