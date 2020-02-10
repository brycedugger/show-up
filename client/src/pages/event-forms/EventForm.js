import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UpdateEventForm from "./assets/UpdateEventForm";
import NewEventForm from "./assets/NewEventForm";
import Home from "../Home";


class EventForm extends Component {

    render() {
        return (
            <div className="wrap bg-white p-3 mx-auto rounded">
                <p className="cardType">Results</p>
                    <Router>
                        <Switch>
                            <Route exact path='/eventform/newevent' component={NewEventForm} />
                            <Route exact path='/eventform/updateevent' component={UpdateEventForm} />
                            <Route path='/' component={Home}/>
                        </Switch>
                    </Router>
            </div>
        );
    }
}

export default EventForm;