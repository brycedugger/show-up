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
        });
        this.searchArtist(res.data.headliner);
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
    API.artistSearch(artist, process.env.REACT_APP_LAST_FM)
      .then(res => {
        //const data = res.data;
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
              <CommentForm eventId={this.state.event._id} />
              <hr></hr>
              {this.state.event.comments && this.displayComments()}
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
