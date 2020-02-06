import React, { Component } from "react";

import NewEventForm from "./NewEventForm";


class NewEvent extends Component {

    state = {
        title: ""
    };

    render() {
        return (
            <div className="wrap bg-white p-3 mx-auto rounded">
                <p className="cardType">Results</p>
                <div className='row'>
                    <NewEventForm />
                </div>
            </div>
        );
    }
}

export default NewEvent;