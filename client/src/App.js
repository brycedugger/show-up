import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Nav />
        {/* Additional Parent Components */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
