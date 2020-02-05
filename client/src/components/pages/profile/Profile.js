import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "./style.css";

class Profile extends Component {
  render() {
    return (
      <div className="profileContainer">
        <Col>
          <ProfileSideBar />
        </Col>
        <Col>
          <ProfileMainContent />
        </Col>
      </div>
    );
  }
}

class ProfileSideBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="sideBarStyle">
          <p>Hello from Side Bar Page</p>
        </div>
      </div>
    );
  }
}

class ProfileMainContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="mainStyle">
          <p>Hello from Main Content Page</p>
        </div>
      </div>
    );
  }
}

export default Profile;
