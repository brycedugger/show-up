import React, { Component } from "react";
import ProfileSideBarInfo from "../../pages/profile/ProfileSideBarInfo";
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
        <ProfileSideBarInfo />
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
            <h2>Your Bookmarked Events</h2>
        </div>
        <div className="mainStyle">
            <h2>Your Created Events</h2>
        </div>
      </div>
    );
  }
}

export default Profile;
