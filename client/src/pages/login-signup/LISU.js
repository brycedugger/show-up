import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./assets/style.css";

import LoginForm from "./assets/LoginForm";
import SignupForm from "./assets/SignupForm";
import Home from "../Home";



class LISU extends Component {

    render() {
        return (
            <div class="form-container mb-5">
                <p className="name">Show Up!</p>
                <p className="motto">Find a show, get out there, and show up!</p>
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
            </div>
        );
    }
}

export default LISU;