import React, { Component } from "react";
import CommentBox from "../components/assets/CommentBox";
import EventInfo from "../components/assets/EventInfo";
import FullCalendar from "../components/assets/FullCalendar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";

class Event extends Component {
  state = {
    event: {}
  };

  componentDidMount() {
    API.getEvent(this.props.match.params.id)
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
                <h1>Event Title{this.state.event.title}</h1>
                <p>Headliner: {this.state.event.headliner}</p>
                <p>Opener: {this.state.event.openers}</p>
                <p>Date: {this.state.event.date}</p>
                <p>Time: {this.state.event.time}</p> 
                <p>Venue: {this.state.event.venue}</p> 
                <p>Address: {this.state.event.address}</p> 
                <p>Description: {this.state.event.description}</p> 
              </EventInfo>
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
