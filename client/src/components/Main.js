import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Event from "../pages/Event"
import NewEvent from "../pages/new-event/NewEvent";
import UpdateEvent from "../pages/update-event/UpdateEvent";
import Profile from "../pages/Profile";


class Books extends Component {

  render() {
    return (

      <div className="container">
        <div className="container mb-5 mt-5">
          <Router>
            <Switch>
              <Route exact path='/event' component={Event} />
              <Route exact path='/newevent' component={NewEvent} />
              <Route exact path='/updateevent' component={UpdateEvent} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/' component={Home}/>
            </Switch>
          </Router>
        </div>
      </div>

    )
  }
}

export default Books;