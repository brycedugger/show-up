import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if () {
  //     API.getSingleEvent()
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <React.Fragment>
        <Nav onClick={this.handleFormSubmit} />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
