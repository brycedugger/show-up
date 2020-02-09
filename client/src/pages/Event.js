import React, { Component } from "react";
import CommentBox from "../components/assets/CommentBox";
import EventInfo from "../components/assets/EventInfo";
import ArtistInfo from "../components/assets/ArtistInfo";

import FullCalendar from "../components/assets/FullCalendar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";

class Event extends Component {
  state = {
    events: {}
  };

  componentDidMount() {
    API.getSingleEvent(this.props.match.params.id)
      .then(res => this.setState({ event: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <EventInfo>
                <h1>Event Title{this.state.events.title}</h1>
                <p>Headliner: {this.state.events.headliner}</p>
                <p>Opener: {this.state.events.openers}</p>
                <p>Date: {this.state.events.date}</p>
                <p>Time: {this.state.events.time}</p>
                <p>Venue: {this.state.events.venue}</p>
                <p>Address: {this.state.events.address}</p>
                <p>Description: {this.state.events.description}</p>
              </EventInfo>
              <ArtistInfo />
            </div>
            <CommentBox />
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <FullCalendar />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Event;
