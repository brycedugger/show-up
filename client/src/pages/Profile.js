import React, { Component } from "react";
import ProfileSideBarInfo from "../pages/profile-components/ProfileSideBarInfo";
import EditProfileBtn from "../pages/profile-components/EditProfileBtn";
import EventCard from "../components/assets/EventCard/index";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

class Profile extends Component {
  render() {
    return (
      <div className="profileContainer">
        <Row>
          <Col xs={6} md={4}>
            <ProfileSideBar />
          </Col>
          <Col>
            <ProfileBookmarkContent />
            <EventCard />
          </Col>
          <Col md={{ span: 6, offset: 4 }}>
            <ProfileCreatedEventContent />
            <EventCard />
          </Col>
        </Row>
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
          <EditProfileBtn />
        </div>
      </div>
    );
  }
}

class ProfileBookmarkContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="mainStyle">
          <h2>Your Bookmarked Events</h2>
        </div>
      </div>
    );
  }
}

class ProfileCreatedEventContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="createdEventsStyle">
          <h2>Your Created Events</h2>
        </div>
      </div>
    );
  }
}

export default Profile;