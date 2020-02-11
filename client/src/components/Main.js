import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Event from "../pages/Event"
import EventForm from "../pages/event-forms/EventForm";
import Profile from "../pages/Profile";


class Books extends Component {

  render() {
    return (

      <div className="container">
        <div className="container mb-5 mt-5">
          <Router>
            <Switch>
              <Route path='/eventform' component={EventForm} />
              <Route path='/event/:id' component={Event} />
              <Route path='/profile' component={Profile} />
              <Route path='/' component={Home}/>
            </Switch>
          </Router>
        </div>
      </div>

    )
  }
}

export default Books;