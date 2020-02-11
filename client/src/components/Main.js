import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Event from "../pages/Event"
import NewEventForm from "../pages/event-forms/NewEventForm";
import UpdateEventForm from "../pages/event-forms/UpdateEventForm";
import Profile from "../pages/Profile";


class Books extends Component {

  render() {
    return (

      <div className="container">
        <div className="container mb-5 mt-5">
          <Router>
            <Switch>
              <Route path='/event' component={Event} />
              <Route path='/newevent' component={NewEventForm} />
              <Route path='/profile' component={Profile} />
              <Route path='/updateevent' component={UpdateEventForm} />

              <Route path='/' component={Home}/>
            </Switch>
          </Router>
        </div>
      </div>

    )
  }
}

export default Books;