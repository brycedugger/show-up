import React, { Component } from "react";
import API from "../utils/API";
import { CardColumns } from "react-bootstrap";
import EventCard from "../components/assets/EventCard";


class Home extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        API.getEvent()
            .then(res => {
                this.setState(
                    { events: res.data }
                );
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <CardColumns>
                {this.state.events.map(event => {
                    return (
                        <EventCard key={event._id} {...event} />
                    )
                })}
            </CardColumns>
        );
    }

}

export default Home;