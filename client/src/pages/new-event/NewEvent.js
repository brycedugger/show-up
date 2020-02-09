import React, { Component } from "react";

import NewEventForm from "./assets/NewEventForm";


class NewEvent extends Component {

    render() {
        return (
            <div className="wrap bg-white p-3 mx-auto rounded">
                <p className="cardType">Results</p>
                    <NewEventForm />
            </div>
        );
    }
}

export default NewEvent;