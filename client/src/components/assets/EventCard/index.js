import React, { Component } from "react";
import "./style.css";

// import UpvoteBtn from "../UpvoteBtn";

class EventCard extends Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.imgur} alt={this.props.headliner} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Headliner: {this.props.headliner}</li>
                        <li className="list-group-item">Openers: {this.props.openers}</li>
                        <li className="list-group-item">Venue: {this.props.venue}</li>
                        <li className="list-group-item">{this.props.date}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    {/* <UpvoteBtn /> */}
                    {/* favorite button */}
                </div>
            </div>
        )
    }

}

export default EventCard;