import React, { Component } from "react";
import ProfileSideBarInfo from "../pages/profile-components/ProfileSideBarInfo";
import EditProfileBtn from "../pages/profile-components/EditProfileBtn";
import UserAPI from "../utils/userAPI";
//import EventCard from "../components/assets/EventCard/index";
import { Row, Col } from "react-bootstrap";

class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    bookmarkedEvents: [],
    createdEvents: []
  }

  componentDidMount() {
    UserAPI.getUser("5e422d62dc87c90abd979306")
      .then(res => {
        console.log(res.data);
        this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          username: res.data.username,
          bookmarkedEvents: res.data.saved,
          createdEvents: res.data.created
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="profileContainer">
        <Row>
          <Col xs={6} md={4}>
            <ProfileSideBar />
          </Col>
          <Col>
            <ProfileBookmarkContent />
            
          </Col>
          <Col md={{ span: 6, offset: 4 }}>
            <ProfileCreatedEventContent />
            
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