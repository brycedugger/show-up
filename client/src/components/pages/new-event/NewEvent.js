import React, { Component } from "react";

import API from "../../utils/API";

import { Input, TextArea, SelectVenue, SelectGenre, FormBtn } from "../../assets/Form";


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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        // if (this.state.title && this.state.author) {
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
            .then(res => console.log(res))
            .catch(err => console.log(err));
        // }
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
                
                <SelectVenue
                    value={this.state.venue}
                    onChange={this.handleInputChange}
                    name="venue"
                    placeholder="Venue"
                />

                <SelectGenre
                    value={this.state.genre}
                    onChange={this.handleInputChange}
                    name="genre"
                    placeholder="Genre"
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