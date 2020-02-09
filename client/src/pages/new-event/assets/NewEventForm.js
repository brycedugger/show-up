import React, { Component } from "react";

import API from "../../../utils/API";

import { Input } from "../../../components/assets/form/Input";
import { TextArea } from "../../../components/assets/form/TextArea";
import Select from "../../../components/assets/form/Select";
import SelectVenue from "../../../components/assets/form/SelectVenue";
import { FormBtn } from "../../../components/assets/form/FormBtn";

import venueJson from "../../../components/assets/form/venue.json";
import genreJson from "../../../components/assets/form/genre.json";


class NewEventForm extends Component {

    state = {
        eventId: "5", 
        title: "",
        headliner: "",
        openers: "",
        date: "",
        time: "",
        venue: "",
        address:"",
        genre: "",
        description: "",
        image: ""
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

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title &&
            this.state.headliner &&
            this.state.date &&
            this.state.time &&
            this.state.venue &&
            this.state.genre &&
            this.state.image
            //add form check for image link, date, and time inputs
        ) {
            API.saveEvent({
                eventId: this.state.eventId,
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
                    //add redirect to different page on form submit, replace setState?
                    this.setState({
                        title: "",
                        headliner: "",
                        openers: "",
                        date: "",
                        time: "",
                        //update so these return to normal on submit.
                        venue: "Select a Venue",
                        genre: "Select a Genre",
                        description: "",
                        image: "" 
                    })
                })
                .catch(err => console.log(err));
        }
        else( 
            alert("Finish the form.")
        )
    };

    render() {
        return (
            <form>

                <Input
                    label={"Title:"}
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
                    label={"Openers (optional):"}
                    name="openers"
                    value={this.state.openers}
                    onChange={this.handleInputChange}
                    placeholder="Openers"
                />

                <Input
                    label={"Date:"}
                    name="date"
                    value={this.state.date}
                    onChange={this.handleInputChange}
                    placeholder="Date (dd/mm/yyyy)"
                />

                <Input
                    label={"Time:"}
                    name="time"
                    value={this.state.time}
                    onChange={this.handleInputChange}
                    placeholder="Time (hh:mm)"
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
                    label={"Description (optional):"}
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    placeholder="Description"
                />

                <Input
                    label={"Image (1:1 image ratio):"}
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
        );
    }
}

export default NewEventForm;