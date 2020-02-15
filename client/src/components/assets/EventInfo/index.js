import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import BookmarkButton from "../bookmarkButton";

class EventInfo extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img
            variant="top"
            src={this.props.image}
            alt={this.props.headliner}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
              <BookmarkButton></BookmarkButton>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Headliner: {this.props.headliner}
                </ListGroup.Item>
                <ListGroup.Item>Opener: {this.props.openers}</ListGroup.Item>
                <ListGroup.Item>Date: {this.props.date}</ListGroup.Item>
                <ListGroup.Item>Time: {this.props.time}</ListGroup.Item>
                <ListGroup.Item>Venue: {this.props.venue}</ListGroup.Item>
                <ListGroup.Item>Address: {this.props.address}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {this.props.description}
                </ListGroup.Item>
              </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default EventInfo;
