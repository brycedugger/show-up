import React, { Component } from "react";

import { Redirect } from "react-router-dom"

import API from "../../utils/API";
import UserAPI from "../../utils/userAPI";

import { Input } from "../../components/assets/form/Input";
import { TextArea } from "../../components/assets/form/TextArea";
import Select from "../../components/assets/form/Select";
import SelectVenue from "../../components/assets/form/SelectVenue";
import { FormBtn } from "../../components/assets/form/FormBtn";

import venueJson from "../../components/assets/form/venue.json";
import genreJson from "../../components/assets/form/genre.json";


class NewEventForm extends Component {

    state = {
        title: "",
        headliner: "",
        openers: "",
        date: "",
        time: "",
        venue: "",
        address: "",
        genre: "",
        description: "",
        image: "",
        userId: "",

        redirect: false

    };


    componentDidMount() {

        const token = localStorage.getItem("token");
        this.handleGetUser(token);

    }

    handleGetUser = token => {
        UserAPI.getUser(token)
        .then(res => {
          this.setState({
            userId: res.data._id
          });
        })
        .catch(err => {
          console.log(err);
        })
      };

    handleVenueInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            address: e.target[e.target.selectedIndex].getAttribute('address')
        });
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    addEventToUsersDb = data => {
        UserAPI.createdEvent({
            userId: this.state.userId,
            _id: data._id
        })
            .then(
                res => {
                    if (res.status === 200) {
                        this.setRedirect();
                    }
                })
            .catch (err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.headliner &&
            this.state.date &&
            this.state.time &&
            this.state.venue &&
            this.state.genre &&
            this.state.image
            //add form check for image link, date, and time inputs
        ) {
            API.saveEvent({
                title: this.state.title,
                headliner: this.state.headliner,
                openers: this.state.openers,
                date: this.state.date,
                time: this.state.time,
                venue: this.state.venue,
                address: this.state.address,
                genre: this.state.genre,
                description: this.state.description,
                image: this.state.image
            })
                .then(
                    res => {
                        this.addEventToUsersDb(res.data)
                    })
                .catch(err => console.log(err));
        }
        else (
            alert("Finish the form.")
        )
    };

render() {

    if (this.state.redirect === true) {
        return <Redirect to="/profile" />
    }

    return (
        <div className="wrap bg-white p-3 mx-auto rounded">
            <h1>Post A New Event</h1>
            <br></br>
            <form>

                <Input
                    label={"Event Title:"}
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    placeholder="Title"
                />

                <Input
                    label={"Headliner:"}
                    name="headliner"
                    value={this.state.headliner}
                    onChange={this.handleInputChange}
                    placeholder="Headliner"
                />

                <Input
                    label={"Openers:"}
                    name="openers"
                    value={this.state.openers}
                    onChange={this.handleInputChange}
                    placeholder="Openers"
                />

                <Input
                    label={"Date (yyyy-mm-dd):"}
                    name="date"
                    value={this.state.date}
                    onChange={this.handleInputChange}
                    placeholder="Date"
                />

                <Input
                    label={"Time (hh:mm):"}
                    name="time"
                    value={this.state.time}
                    onChange={this.handleInputChange}
                    placeholder="Time"
                />

                <SelectVenue
                    label={"Venue:"}
                    name="venue"
                    address="address"
                    arrayOfData={venueJson}
                    handleChange={this.handleVenueInputChange}
                />

                <Select
                    label={"Genre:"}
                    name="genre"
                    arrayOfData={genreJson}
                    handleChange={this.handleInputChange}
                />

                <TextArea
                    label={"Description (Optional):"}
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    placeholder="Description"
                />

                <Input
                    label={"Image Link:"}
                    name="image"
                    value={this.state.image}
                    onChange={this.handleInputChange}
                    placeholder="Image (Link)"
                />

                <FormBtn
                    onClick={this.handleFormSubmit}
                >
                    Submit Event
                </FormBtn>
            </form>
        </div>
    );
}
}

export default NewEventForm;