import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

class MainNav extends Component {
  clearTokenFromLS() {
    localStorage.removeItem("token");
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar" expand="lg">
          <Navbar.Brand href="/" className="navBrand">
            Show Up
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {!this.props.isLoggedIn ? (
              <Nav className="ml-auto">
                <Nav.Link href="/signup">Sign Up</Nav.Link>

                <Nav.Link href="/login">Log In</Nav.Link>
              </Nav>
            ) : (
              <Nav className="ml-auto">
                <Nav.Link href="/newevent">Post New Event</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/" onClick={this.clearTokenFromLS}>
                  Logout
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default MainNav;
