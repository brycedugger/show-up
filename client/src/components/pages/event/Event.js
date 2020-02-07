import React, { Component } from "react";
import CommentBox from "../../assets/CommentBox";
import EventInfo from "../../assets/EventInfo";
import FullCalendar from "../../assets/FullCalendar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Event extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <EventInfo />
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
