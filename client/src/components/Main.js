import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Event from "./pages/event/Event";
import NewEvent from "./pages/new-event/NewEvent";
import Profile from "./pages/profile/Profile";


class Books extends Component {

  render() {
    return (

      <div className="container">
        <div className="container mb-5 mt-5">
          <Router>
            <Route exact path='/' component={Home}/>
            <Route exact path='/event' component={Event} />
            <Route exact path='/newevent' component={NewEvent} />
            <Route exact path='/profile' component={Profile} />
          </Router>
        </div>
      </div>

    )
  }

}

export default Books;