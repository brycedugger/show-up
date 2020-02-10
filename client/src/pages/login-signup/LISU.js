import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginForm from "./form-containers/LoginForm";
import SignupForm from "./form-containers/SignupForm";
import Home from "../Home";



class LISU extends Component {

    render() {
        return (
            <div className="wrap bg-white p-3 mx-auto rounded">
                <p className="cardType"></p>
                    <Router>
                        <Switch>
                            <Route path='/lisu/login' component={LoginForm} />
                            <Route path='/lisu/signup' component={SignupForm} />
                            <Route path='/' component={Home} />
                        </Switch>
                    </Router>
            </div>
        );
    }
}

export default LISU;