import React from "react";
import Card from "react-bootstrap/Card";

function EventInfo({ children }) {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src="eventImagePlaceHolder.jpg"
        />
        <Card.Body>
          <Card.Text>{children}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventInfo;
