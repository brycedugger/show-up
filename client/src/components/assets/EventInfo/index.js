import React from "react";

function EventInfo (props) {
    return (
        <div>
            <h1>Event Title</h1>
            <p>Date:</p> {props.date}
            <p>Time:</p> {props.time}
            <p>Venue:</p> {props.venue}
            <p>Address:</p> {props.address}
        </div>
    );
}

export default EventInfo;
