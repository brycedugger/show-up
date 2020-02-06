import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Event from "../pages/Event"
import NewEvent from "../pages/new-event/NewEvent";
import Profile from "../pages/Profile";


class Books extends Component {

  render() {
    return (

      <div className="container">
        <div className="container mb-5 mt-5">
          <Router>
            <Switch>
              <Route path='/event' component={Event} />
              <Route path='/newevent' component={NewEvent} />
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