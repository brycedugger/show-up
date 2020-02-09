import React, { Component } from "react";

import UpdateEventForm from "./assets/UpdateEventForm";


class UpdateEvent extends Component {

    render() {
        return (
            <div className="wrap bg-white p-3 mx-auto rounded">
                <p className="cardType">Results</p>
                    <UpdateEventForm />
            </div>
        );
    }
}

export default UpdateEvent;