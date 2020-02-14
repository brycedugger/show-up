import React, { Component } from "react";
import { CommentBox, CommentDisplay } from "../components/assets/Comment";
import EventInfo from "../components/assets/EventInfo";
import FullCalendar from "../components/assets/FullCalendar";
import Container from "react-bootstrap/Container";
import {Row, Col, Card} from "react-bootstrap";
import API from "../utils/API";
// import moment from "moment";

class Event extends Component {
  state = {
    event: {},
    lastfm: []
  };

  componentDidMount() {
    API.getOneEvent(this.props.match.params.id)
      .then(res => {
        this.setState({
          event: res.data
        });
        this.searchArtist(res.data.headliner);
      })
      .catch(err => console.log(err));
  }

  searchArtist(artist) {
    API.artistSearch(artist, process.env.REACT_APP_LAST_FM)
      .then(res => {
        const data = res.data;
        console.log(res.data);
        console.log(res.data.artist.name);

        this.setState({
          lastfm: res.data
        });
      })
      .catch(err => console.log(err));
      console.log(this.state.lastfm.artist.name);
  }

  checkLogin(loginStatus) {
    if (loginStatus === true) {
      console.log("User logged in");
    } else {
      console.log("User not logged in");
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <EventInfo {...this.state.event} />
            </div>
            <br></br>
            <div>
              <Card>
                <Card.Img variant="top" src="/artistImagePlaceHolder.jpg" />
                <Card.Body>
                  <h2>About Artist</h2>
                  {/* <p>Name: {this.state.lastfm.artist.name}</p> */}
                </Card.Body>
              </Card>
            </div>
            <br></br>
            <div>
              <CommentBox onClick={() => this.checkLogin()} />
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
