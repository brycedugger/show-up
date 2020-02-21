import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import UserAPI from "../utils/userAPI";

class BookmarkButton extends Component {
  render() {
    return (
      <Button variant="outline-success">Bookmark</Button>
    );
  }
}

export default BookmarkButton;
