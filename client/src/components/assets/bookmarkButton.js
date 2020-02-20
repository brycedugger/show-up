import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class BookmarkButton extends Component {
  render() {
    return (
      <Button
        variant="outline-success"
        // onClick={() => {
        //   this.props.onClickFunc();
        // }}
      >
        Bookmark
      </Button>
    );
  }
}

export default BookmarkButton;

// get user id from profile page
// and the event id that will be a prop