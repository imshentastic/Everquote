import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import EditNotebookFormContainer from './home/edit_notebook_form';
import ShowNotebookContainer from './home/show_notebook_container';
import Modal from './modal/modal';
import NotebookIndexContainer from './home/notebook_index_container';

import {AuthRoute, ProtectedRoute} from '../util/route_util';

import {Route, Switch} from 'react-router-dom';

const App = () => (
    <div>
                <ProtectedRoute exact path="/api/notebooks/:notebookId" component={ShowNotebookContainer} />
                <ProtectedRoute exact path="/api/notebooks/:notebookId/edit" component={EditNotebookFormContainer} />
        <Modal />
        <Switch>
            <AuthRoute path='/login' component={LoginContainer}/>
            <AuthRoute path='/signup' component={SignupContainer}/>
            <Route path='/' component={GreetingContainer} />
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