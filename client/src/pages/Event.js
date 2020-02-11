import React, { Component } from "react";
import { CommentBox, CommentDisplay } from "../components/assets/Comment";
import EventInfo from "../components/assets/EventInfo";
import ArtistInfo from "../components/assets/ArtistInfo";
import { useParams } from "react-router";
import FullCalendar from "../components/assets/FullCalendar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
// import moment from "moment";

class Event extends Component {
  state = {
    title: "",
    headliner: "",
    openers: "",
    date: "",
    time: "",
    venue: "",
    address: "",
    genre: "",
    description: "",
    image: "",
    // artistName: "Cher",
    // artistImage: "",
    loginStatus: false
  };

  componentDidMount() {
    const eventId = useParams();
    console.log(eventId);
    API.getOneEvent(eventId)
      .then(res => {
        const data = res.data;
        this.setState({
          title: data.title,
          headliner: data.headliner,
          openers: data.openers,
          // date: moment(data.date).format("MMMM Do YYYY, h:mm:ss a"),
          //time is undefined. something to do with Date property
          //in models in relation to my get request.

          //venue and address values stored, select isn't being updated.
          venue: data.venue,
          address: data.address,
          //genre value stored. select isn't being updated.
          genre: data.genre,
          description: data.description,
          image: data.image
        });
      })
      .catch(err => console.log(err));

    // API.artistSearch(data.headliner)
    // .then(res => {
    //   const data = res.data;
    //   console.log(res.data);
    //   this.setState({
    //     artistName: data.name
    //   });
    // })
    // .catch(err => console.log(err));
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
              <EventInfo md={8}>
                <h2>{this.state.title}</h2>
                <p>Headliner: {this.state.headliner}</p>
                <p>Opener: {this.state.openers}</p>
                <p>Date: {this.state.date}</p>
                <p>Time: {this.state.time}</p>
                <p>Venue: {this.state.venue}</p>
                <p>Address: {this.state.address}</p>
                <p>Description: {this.state.description}</p>
              </EventInfo>
            </div>
            <br></br>
            <div>
              <ArtistInfo>
                <h2>About Artist</h2>
                <p>Name: {this.state.artistName}</p>
              </ArtistInfo>
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
