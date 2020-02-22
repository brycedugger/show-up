import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MainNav from "./components/Nav";
import Main from "./components/Main";
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
          isLoggedIn={this.state.isLoggedIn} />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
