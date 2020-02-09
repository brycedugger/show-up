import React, { Component } from "react";

import { Redirect } from "react-router-dom"

import API from "../../../utils/API";

import { Input } from "../../../components/assets/form/Input";
import { TextArea } from "../../../components/assets/form/TextArea";
import Select from "../../../components/assets/form/Select";
import SelectVenue from "../../../components/assets/form/SelectVenue";
import { FormBtn } from "../../../components/assets/form/FormBtn";


import venueJson from "../../../components/assets/form/venue.json";
import genreJson from "../../../components/assets/form/genre.json";


class UpdateEventForm extends Component {

    state = {
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

    componentDidMount() {
        this.getEvent();
    }

    getEvent = () => {
        API.getOneEvent("1")
            .then(res => {
                const data = res.data
                console.log("data" + (JSON.stringify(data)))
                console.log("time" + data.time)
                this.setState({ 
                    title: data.title,
                    headliner: data.headliner,
                    openers: data.openers,
                    date: data.date,
                    //time is undefined. something to do with Date property
                    //in models in relation to my get request.
                    time: data.time,
                    //venue and address values stored, select isn't being updated.
                    venue: data.venue,
                    address: data.address,
                    //genre value stored. select isn't being updated.
                    genre: data.genre,
                    description: data.description,
                    image: data.image,
                });
            })
            .catch(err => {
                console.log('err :', err);
            });
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

    profileRedirect = () => {
        console.log("profile redirect")
        return <Redirect to='/profile' />
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title &&
            this.state.headliner &&
            this.state.date &&
            this.state.time &&
            //may have to remove the venue check. All checks for that matter
            this.state.venue &&
            this.state.genre &&
            this.state.image
            //add form check for image link, date, and time inputs
        ) {
            API.updateEvent({
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
                    //add redirect to profile on form submit, replace setState?
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

    handleDeleteEvent = eventId => {
        API.deleteEvent(eventId)
            .then(res => {
                if (res.data.deletedCount === 1) {
                    // console.log("res.data" + (JSON.stringify(res.data)))
                    this.profileRedirect();
                }
            })
            .catch(err => {
                console.log('err :', err);
            });
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
                    {...console.log("venue" + this.state.venue)}
                    {...console.log("address" + this.state.address)}

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
                    onClick={this.handleDeleteEvent}
                >
                    Delete Event
                </FormBtn>

                <FormBtn
                    onClick={this.handleFormSubmit}
                >
                    Update Event
                </FormBtn>

            </form>
        );
    }
}

export default UpdateEventForm;