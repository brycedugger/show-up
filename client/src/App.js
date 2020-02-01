import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
