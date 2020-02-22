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
import EditUserInfo from "../pages/profile-components/EditUserInfo";
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

      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <MainNav
            onClick={this.handleFormSubmit}
            isLoggedIn={this.state.isLoggedIn} />
          <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/signup' component={SignupForm} />
            <Route path='/newevent' component={NewEventForm} />
            <Route path='/edituserinfo' component={EditUserInfo} />              
            <Route path='/event/:id' component={Event} />
            <Route path='/profile' component={Profile} />
            <Route path='/update/:id' component={UpdateEventForm} />
            <Route path='/' component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
