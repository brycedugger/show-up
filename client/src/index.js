import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import Login from "./components/pages/login-signup/Login";
import Signup from "./components/pages/login-signup/Signup";



ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path='/' component={App} />
            {/* <Route component={NotFoundPage} /> */}
        </Switch>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();