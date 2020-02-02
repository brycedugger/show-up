import React, { Component } from "react";

import API from "../../utils/API";

import { Input } from "../../assets/Form/Input";
import { TextArea } from "../../assets/Form/TextArea";
import { Select } from "../../assets/Form/Select";
import { FormBtn } from "../../assets/Form/FormBtn";

const venueArray = [
    {
        id: "1",
        value: "Paramount Theatre"   
    },
    {
        id: "2",
        value: "Showbox at the Market"   
    },
    {
        id: "3",
        value: "Showbox SoDo"   
    },
    {
        id: "4",
        value: "MaMu Theatre"   
    }
];

const genreArray = [
    {
        id: "1",
        value: "Rock"   
    },
    {
        id: "2",
        value: "Hip Hop"   
    },
    {
        id: "3",
        value: "Country"   
    },
    {
        id: "4",
        value: "Jazz"   
    }
];


class NewEvent extends Component {

    state = {
        title: "",
        artist: "",
        openers: "",
        date: "",
        doorTime: "",
        showTime: "",
        venue: "",
        genre: "",
        description: "",
        image: ""
    };

    viewRes = (res) => {
        console.log("response" + res)
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSelectChange = value =>{
        this.setState({
          venue: value
        });
      }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && 
            this.state.artist &&
            this.state.openers &&
            this.state.date &&
            this.state.doorTime &&
            this.state.showTime &&
            this.state.venue &&
            this.state.genre &&
            this.state.description &&
            this.state.image
            ) {
        API.saveEvent({
            title: this.state.title,
            artist: this.state.artist,
            openers: this.state.openers,
            date: this.state.date,
            doorTime: this.state.doorTime,
            showTime: this.state.showTime,
            venue: this.state.venue,
            genre: this.state.genre,
            description: this.state.description,
            image: this.state.image
        })
            .then(res => this.viewRes(res))
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
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title"
                />

                <Input
                    value={this.state.artist}
                    onChange={this.handleInputChange}
                    name="artist"
                    placeholder="Artist"
                />

                <Input
                    value={this.state.openers}
                    onChange={this.handleInputChange}
                    name="openers"
                    placeholder="Openers"
                />

                <Input
                    value={this.state.date}
                    onChange={this.handleInputChange}
                    name="date"
                    placeholder="Date (dd/mm/yyyy)"
                />

                <Input
                    value={this.state.doorTime}
                    onChange={this.handleInputChange}
                    name="doorTime"
                    placeholder="Doors Open (hh:mm)"
                />

                <Input
                    value={this.state.showTime}
                    onChange={this.handleInputChange}
                    name="showTime"
                    placeholder="Show Starts (hh:mm)"
                />

                <Select
                    // value = {this.state.selectedValue}
                    venueOptions={venueArray} 
                    onSelectChange={this.handleSelectChange}
                    name = "venue"
                />

                <Select
                    // value = {this.state.selectedValue}
                    genreOptions={genreArray} 
                    onSelectChange={this.handleSelectChange}
                    name = "genre"
                />

                <TextArea
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="Description"
                />

                <Input
                    value={this.state.image}
                    onChange={this.handleInputChange}
                    name="image"
                    placeholder="Image (Link)"
                />

                <FormBtn
                    // disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                >
                    Submit Event
              </FormBtn>
            </form>
        );
    }
}

export default NewEvent;