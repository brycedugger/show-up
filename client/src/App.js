import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Event from "./pages/Event"
import NewEventForm from "./pages/event-forms/NewEventForm";
import UpdateEventForm from "./pages/event-forms/UpdateEventForm";
import Profile from "./pages/Profile";
import LoginForm from "./pages/login-signup/LoginForm";
import SignupForm from "./pages/login-signup/SignupForm";

import MainNav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {

  state = {
    isLoggedIn: false
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.setState({ isLoggedIn: false });
    } else {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    return (
      <React.Fragment>
        <MainNav 
          onClick={this.handleFormSubmit} 
          isLoggedIn={this.state.isLoggedIn}/>
        <Router>
            <Switch>
              <Route path='/login' component={LoginForm} />
              <Route path='/signup' component={SignupForm} />
              <Route path='/newevent' component={NewEventForm} />
              <Route path='/event/:id' component={Event} />
              <Route path='/profile' component={Profile} />
              <Route path='/update/:id' component={UpdateEventForm} />
              <Route path='/' component={Home} />
            </Switch>
          </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
