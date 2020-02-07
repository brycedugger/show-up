import React from "react";

function EventInfo(props) {
  return (
    <div>
      <h1>Event Title{props.title}</h1>
      <p>Headliner:</p> {props.headliner}
      <p>Opener:</p> {props.openers}
      <p>Date:</p> {props.date}
      <p>Time:</p> {props.time}
      <p>Venue:</p> {props.venue}
      <p>Address:</p> {props.address}
      <p>Description:</p> {props.description}
    </div>
  );
}

export default EventInfo;
