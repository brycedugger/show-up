import React, { Component } from "react";
import CommentBox from "../../assets/CommentBox";
import EventInfo from "../../assets/EventInfo";


class Event extends Component {

    render() {
        return (
            <div className="container">
                <div className="container mb-5 mt-5">
                    <p>Hello from Event Page</p>
                </div>
                <EventInfo />
                <CommentBox />
            </div>

        );
    }

}

export default Event;