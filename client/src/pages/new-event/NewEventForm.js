import React, { Component } from "react";

import API from "../../utils/API";

import { Input } from "../../components/assets/form/Input";
import { TextArea } from "../../components/assets/form/TextArea";
import Select  from "../../components/assets/form/Select";
import { FormBtn } from "../../components/assets/form/FormBtn";

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


class NewEventForm extends Component {

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

    //run a function to get venues and fill the array. pass props. 
    //react 19 ex. 25 & 26

    viewRes = (res) => {
        console.log("response" + res)
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleSelectChange = value =>{
    //     this.setState({
    //       [name]: value

    //     });
    //   }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && 
            this.state.artist &&
            this.state.openers &&
            this.state.date &&
            this.state.doorTime &&
            this.state.showTime &&
            // this.state.venue &&
            // this.state.genre &&
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
        // else( 
        //     alert("Finish the form.")
        // )
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
                    label={"Artist:"}
                    name="artist"
                    value={this.state.artist}
                    onChange={this.handleInputChange}
                    placeholder="Artist"
                />
                
                <Input
                    label={"Openers:"}
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
                    label={"Door Time:"}
                    name="doorTime"
                    value={this.state.doorTime}
                    onChange={this.handleInputChange}
                    placeholder="Doors Open (hh:mm)"
                />

                <Input
                    label={"Show Time:"}
                    name="showTime"
                    value={this.state.showTime}
                    onChange={this.handleInputChange}
                    placeholder="Show Starts (hh:mm)"
                />

                <Select
                    label={"Venue:"}
                    name='venue'
                    arrayOfData={venueArray}
                    handleChange={this.handleInputChange}
                />

                <Select
                    label={"Genre:"}
                    name='genre'
                    arrayOfData={genreArray}
                    handleChange={this.handleInputChange}
                />

                <TextArea
                    label={"description"}
                    name = "description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    placeholder="Description"
                />

                <Input
                    label={"description"}
                    name="image"
                    value={this.state.image}
                    onChange={this.handleInputChange}
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

export default NewEventForm;