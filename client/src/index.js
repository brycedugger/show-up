import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import LoginForm from "./pages/login-signup/LoginForm";
import SignupForm from "./pages/login-signup/SignupForm";



ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/signup' component={SignupForm} />                
            <Route path='/' component={App} />
        </Switch>
    </Router>
    , document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById("root"));
