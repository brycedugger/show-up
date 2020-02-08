import React from "react";
import Card from "react-bootstrap/Card";

function EventInfo({ children }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="..." />
        <Card.Body>
          <Card.Text>{children}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventInfo;
