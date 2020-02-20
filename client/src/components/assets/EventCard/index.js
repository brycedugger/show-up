import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import UpvoteButton from "../upvoteButton";
import "./style.css";

class EventCard extends Component {

    eventRoute = "/event/" + this.props._id;

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image} alt={this.props.headliner} />
                <Card.Body>
                    <Card.Title><a href={this.eventRoute}>{this.props.title}</a></Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Headliner: {this.props.headliner}</ListGroupItem>
                    <ListGroupItem>Openers: {this.props.openers}</ListGroupItem>
                    <ListGroupItem>Venue: {this.props.venue}</ListGroupItem>
                    <ListGroupItem>Date: {this.props.date}</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <UpvoteButton />
                    {/* favorite button */}
                </Card.Footer>
            </Card>
        )
    }

}

export default EventCard;