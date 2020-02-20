import React, { Component } from "react";
import { CommentBox, CommentDisplay } from "../components/assets/Comment";
import EventInfo from "../components/assets/EventInfo";
import FullCalendar from "../components/assets/FullCalendar";
import Container from "react-bootstrap/Container";
import { Row, Col, Card } from "react-bootstrap";
import API from "../utils/API";
// import moment from "moment";

class Event extends Component {
  state = {
    event: {},
    lastfm: {}
  };

  componentDidMount() {
    API.getOneEvent(this.props.match.params.id)
      .then(res => {
        this.setState({
          event: res.data
        }, this.searchArtist);
      })
      .catch(err => console.log(err));
  }

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
              <EventInfo {...this.state.event} />
            </div>
            <br></br>
            {artist}
            {this.state.lastfm.artist && this.displayArtist()}
            <br></br>
            <div id="commentBox">
              <CommentBox onClick={() => this.test()} />
              <br></br>
              <CommentDisplay></CommentDisplay>
            </div>
          </Col>
          <Col md={4}>
            <FullCalendar />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Event;
