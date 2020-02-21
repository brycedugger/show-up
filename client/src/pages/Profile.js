import React, { Component } from "react";
import ProfileSideBarInfo from "../pages/profile-components/ProfileSideBarInfo";
import UserAPI from "../utils/userAPI";
import CreatedEventCard from "../components/assets/CreatedEventCard";
import BookmarkedEventCard from "../components/assets/BookmarkedEventCard";
import { Row, Col } from "react-bootstrap";

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
  };

  displayBookmarks = () => {
    if (this.state.bookmarkedEvents.length >= 1) {
      return (
        <React.Fragment>
          {this.state.bookmarkedEvents.map(event => {
            return (
              <BookmarkedEventCard key={event._id} {...event} />
            )
          })}
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <h5>No Bookmarked Events</h5>
        </React.Fragment>
      )
    }
  }

  displayCreated = () => {
    if (this.state.createdEvents.length >= 1) {
      return (
        <React.Fragment>
          {this.state.createdEvents.map(event => {
            return (
              <CreatedEventCard key={event._id} {...event} />
            )
          })}
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <h5>No Created Events</h5>
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <div className="profileContainer">
        <Row>
          <Col xs={6} md={4}>
            <div className="container">
              <div className="sideBarStyle">
                <ProfileSideBarInfo
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  username={this.state.username}
                  email={this.state.email}
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="container">
              <div className="mainStyle">
                <h2>Your Bookmarked Events</h2>
                {this.state.bookmarkedEvents && this.displayBookmarks()}
              </div>
            </div>
          </Col>
          <Col md={{ span: 6, offset: 4 }}>
            <div className="container">
              <div className="createdEventsStyle">
                <h2>Your Created Events</h2>
                {this.state.createdEvents && this.displayCreated()}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;