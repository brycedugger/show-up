import React, { Component } from "react";
import EventInfo from "../components/assets/EventInfo";
import FullCalendar from "../components/assets/FullCalendar";
import Container from "react-bootstrap/Container";
import { Row, Col, Card } from "react-bootstrap";
import CommentForm from "../components/assets/Comment/CommentForm";
import CommentBlock from "../components/assets/Comment/CommentBlock";
import API from "../utils/API";
import UserAPI from "../utils/userAPI";

class Event extends Component {
  state = {
    event: {},
    lastfm: {},
    username: ""
  };

  componentDidMount() {
    API.getOneEvent(this.props.match.params.id)
      .then(res => {
        this.setState({
          event: res.data
        }, this.searchArtist);
      })
      .catch(err => console.log(err));

    const token = localStorage.getItem("token");
    this.handleGetUser(token);
  }

  handleGetUser = token => {
    UserAPI.getUser(token)
      .then(res => {
        this.setState({
          username: res.data.username,
        });
      })
      .catch(err => {
        console.log(err);
      })
  };

  searchArtist(artist) {
    artist = artist || this.state.event.headliner;
    console.log("Artist name for searching", artist);
    API.artistSearch(artist, process.env.REACT_APP_LAST_FM)
      .then(res => {
        console.log("We got an artist", res.data);
        // console.log(res.data.artist.name);
        this.setState({
          lastfm: res.data
        });
      })
      .catch(err => console.log(err));
  }

  checkLogin(loginStatus) {
    if (loginStatus === true) {
      console.log("User logged in");
    } else {
      console.log("User not logged in");
    }
  }

  displayComments() {
    if (this.state.event.comments.length >= 1) {
      return (
        <React.Fragment>
          {this.state.event.comments.map(comment => {
            return (
              <CommentBlock key={comment._id} {...comment} />
            )
          })}
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <h3>No Comments</h3>
        </React.Fragment>
      )
    }
  }

  displayArtist() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src="/artistImagePlaceHolder.jpg" />
          <Card.Body>
            <h2>About Artist</h2>
            <h3> {this.state.lastfm.artist.name}</h3>
            <p>{this.state.lastfm.artist.bio.content}</p>

          </Card.Body>
        </Card>
      </div>
    );
  }

  render() {
    let artist;

    return (
      <Container>
        <Row>
          <Col>
            <div>
              <EventInfo username={this.state.username} eventId={this.state.event._id} {...this.state.event} />
            </div>
            <br></br>
            {artist}
            {this.state.lastfm.artist && this.displayArtist()}
            <br></br>
            <div>
              <CommentForm username={this.state.username} eventId={this.state.event._id} />
              <hr></hr>
              {this.state.event.comments && this.displayComments()}
            </div>
          </Col>
          <Col md={4}>
            <FullCalendar {...this.state.event}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Event;
