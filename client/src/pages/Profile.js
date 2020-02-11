import React, { Component } from "react";
import UserAPI from "../utils/userAPI";
import ProfileSideBarInfo from "../pages/profile-components/ProfileSideBarInfo";
import EditProfileBtn from "../pages/profile-components/EditProfileBtn";
import EventCard from "../components/assets/EventCard/index";


class Profile extends Component {

  state = {
    bookmarkedEvents =[],
    createdEvents =[]
  }

  componentDidMount() {
    this.getBookmarkedEvents();
    this.getCreatedEvents();
  }

  getBookmarkedEvents() {
    UserAPI.getBookmarked()
      .then(res => {
        this.setState(
          { bookmarkedEvents: res.data }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  getCreatedEvents() {
    UserAPI.getCreated()
      .then(res => {
        this.setState(
          { createdEvents: res.data }
        );
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
            {this.state.bookmarkedEvents.map(event => {
              return (
                <EventCard key={event._id} {...event} />
              )
            })}
          </Col>
          <Col md={{ span: 6, offset: 4 }}>
            <ProfileCreatedEventContent />
            {this.state.createdEvents.map(event => {
              return (
                <EventCard key={event._id} {...event} />
              )
            })}
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