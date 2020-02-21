import React, { Component } from "react";
import API from "../utils/API";
import UserAPI from "../utils/userAPI";
import { CardColumns } from "react-bootstrap";
import EventCard from "../components/assets/EventCard";


class Home extends Component {
    state = {
        events: [],
        username: ""
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
        const token = localStorage.getItem("token");
        this.handleGetUser(token);
    }

    handleGetUser = token => {
        UserAPI.getUser(token)
            .then(res => {
                this.setState({
                    username: res.data.username,
                });
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (
            <CardColumns>
                {this.state.events.map(event => {
                    return (
                        <EventCard key={event._id} username={this.state.username} {...event} />
                    )
                })}
            </CardColumns>
        );
    }

}

export default Home;