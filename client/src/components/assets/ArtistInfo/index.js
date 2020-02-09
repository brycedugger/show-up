import React from "react";
import Card from "react-bootstrap/Card";

function ArtistInfo({ children }) {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src="artistImagePlaceHolder.jpg"
        />
        <Card.Body>
          <Card.Text>{children}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ArtistInfo;
