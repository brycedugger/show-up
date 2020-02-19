import React, { Component } from "react";
import ProfileSideBarInfo from "../pages/profile-components/ProfileSideBarInfo";
import EditProfileBtn from "../pages/profile-components/EditProfileBtn";
import UserAPI from "../utils/userAPI";
import EventCard from "../components/assets/EventCard/index";
import { Row, Col } from "react-bootstrap";
import UpvoteButton from "../components/assets/upvoteButton";

class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    bookmarkedEvents: [],
    createdEvents: []
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    this.handleGetUser(token);
  }

handleGetUser = token => {
  UserAPI.getUser(token)
  .then(res => {
    this.setState({
      firstName: res.data.firstName,
      lastName: res.data.lastName,
      username: res.data.username,
      email: res.data.email,
      bookmarkedEvents: res.data.saved,
      createdEvents: res.data.created
    });
  })
  .catch(err => {
    console.log(err);
  })
    // console.log(this.data.state);
};

  render() {
    return (
      <div className="profileContainer">
        <Row>
          <Col xs={6} md={4}>
            <ProfileSideBar 
            firstName={this.state.firstName} 
            lastName={this.state.lastName}
            username={this.state.username}
            email={this.state.email}
            />
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
          <ProfileSideBarInfo 
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          username={this.props.username}
          email={this.props.email}
          />
          <EditProfileBtn />

        <br></br>
        <br></br>
          <UpvoteButton />
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
          <EventCard />
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