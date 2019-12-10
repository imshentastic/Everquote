import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

// import {Route} from 'react-router-dom';

const App = () => (
    <div>
        <header>
            
            <AuthRoute path='/login' component={LoginContainer}/>
            <AuthRoute path='/signup' component={SignupContainer}/>
            {/* <ProtectedRoute path='/' component={SignupContainer} /> */}
            {/* <GreetingContainer /> */}
            <AuthRoute exact path='/' component={GreetingContainer} />
        </header>
    </div>
)

export default App;