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
        // this.searchArtist(res.data.headliner);
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
    // console.log(this.state.lastfm[0].artist.name);
  }

  checkLogin(loginStatus) {
    if (loginStatus === true) {
      console.log("User logged in");
    } else {
      console.log("User not logged in");
    }
  }

  // artistInfo() {
  //   if (this.state.lastfm === undefined) {
  //     this.getArtistButton()
  //   } else {
  //     this.displayArtist();
  //   }
  // }

  // getArtistButton() {
  //   let myArtist = this.state.lastfm;
  //   let myArtistValues = myArtist.artist
  //   // let trick = Object.keys(myArtistValues)[0]
  //   if(typeof myArtistValues !== "undefined") {
  //     console.log('get artist '+ JSON.stringify(myArtistValues));
  //     console.log('get artist name '+ myArtistValues.name);
  //   } else {
  //     console.log("no artist yet");
  //   }
    
  //   return (
  //     <button
  //       onClick={() => {
  //         console.log("click");
  //         {
  //           this.searchArtist(this.state.event.headliner);
  //         }
  //       }}
  //     >
  //       Get Artist Info{" "}
  //     </button>
  //   );
  // }

  displayArtist() {
    // console.log('display artist'+ JSON.stringify(this.state.lastfm))
    return (
      <div>
        <Card>
          <Card.Img variant="top" src="/artistImagePlaceHolder.jpg" />
          <Card.Body>
            {/* <div>
            {this.test()}
          </div> */}
            <h2>About Artist</h2>
            <h3> {this.state.lastfm.artist.name}</h3>
            <p>{this.state.lastfm.artist.bio.content}</p>

          </Card.Body>
        </Card>
      </div>
    );
  }

  render() {
    let {stateArtists} = this.state.lastfm;
    //console.log("render" + JSON.stringify(emptyArtists));
    let artist;

    // if (stateArtists) {
    //   artist = this.displayArtist();

    // } else {
    //   artist = this.getArtistButton();

    // }

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
