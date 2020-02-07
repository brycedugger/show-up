import React, { Component } from "react";
<<<<<<< HEAD:client/src/components/pages/event/Event.js
import CommentBox from "../../assets/CommentBox";
import EventInfo from "../../assets/EventInfo";
import FullCalendar from "../../assets/FullCalendar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
=======
import CommentBox from "../components/assets/CommentBox";
import EventInfo from "../components/assets/EventInfo";

>>>>>>> fc869652d24ea7ec9752ddaa073b7a1b5d27826f:client/src/pages/Event.js

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
