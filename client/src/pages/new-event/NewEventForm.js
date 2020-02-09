import React, { Component } from "react";

import API from "../../utils/API";

import { Input } from "../../components/assets/form/Input";
import { TextArea } from "../../components/assets/form/TextArea";
import Select from "../../components/assets/form/Select";
import SelectVenue from "../../components/assets/form/SelectVenue";
import { FormBtn } from "../../components/assets/form/FormBtn";

const venueArray = [
    {
        id: "0",
        value: "Select a Venue",
        address: "xxx",
    },
    {
        id: "1",
        value: "Barboza",
        address: "925 E Pike St, Seattle, WA 98122",
    },
    {
        id: "2",
        value: "CenturyLink Field",
        address: "800 Occidental Ave S, Seattle, WA 98134",
    },
    {
        id: "3",
        value: "Chop Suey",
        address: "1325 E Madison St, Seattle, WA 98122",
    },
    {
        id: "4",
        value: "The Crocodile",
        address: "2200 2nd Ave, Seattle, WA 98121",
    },
    {
        id: "5",
        value: "Dimitriou's Jazz Alley",
        address: "2033 6th Ave, Seattle, WA 98121",
    },
    {
        id: "6",
        value: "El Corazon",
        address: "109 Eastlake Ave E, Seattle, WA 98109",
    },
    {
        id: "7",
        value: "The Gorge Ampetheatre",
        address: "754 Silica Rd NW, George, WA 98848",
    },
    {
        id: "8",
        value: "Marymoor Park",
        address: "6046 West Lake Sammamish Pkwy NE, Redmond, WA 98052",
    },
    {
        id: "9",
        value: "Monkey Loft",
        address: "2915 1st Ave S, Seattle, WA 98134",
    },
    {
        id: "10",
        value: "Moore Theatre",
        address: "1932 2nd Ave, Seattle, WA 98101",
    },
    {
        id: "11",
        value: "Nectar Lounge",
        address: "412 N 36th St, Seattle, WA 98103",
    },
    {
        id: "12",
        value: "Neptune Theatre",
        address: "1303 NE 45th St, Seattle, WA 98105",
    },
    {
        id: "13",
        value: "Neumos",
        address: "925 E Pike St, Seattle, WA 98122",
    },
    {
        id: "14",
        value: "Paramount Theatre",
        address: "911 Pine St, Seattle, WA 98101",
    },
    {
        id: "15",
        value: "Q Nightclub",
        address: "1426 Broadway, Seattle, WA 98122",
    },
    {
        id: "16",
        value: "ShoWare Center",
        address: "625 W James St, Kent, WA 98032",
    },
    {
        id: "17",
        value: "Showbox at the Market",
        address: "1426 1st Ave, Seattle, WA 98101",
    },
    {
        id: "18",
        value: "Showbox SoDo",
        address: "1700 1st Ave S, Seattle, WA 98134",
    },
    {
        id: "19",
        value: "The Sunset Tavern",
        address: "5433 Ballard Ave NW, Seattle, WA 98107",
    },
    {
        id: "20",
        value: "Tacoma Dome",
        address: "2727 E D St, Tacoma, WA 98421",
    },
    {
        id: "21",
        value: "The Triple Door",
        address: "216 Union St, Seattle, WA 98101",
    },
    {
        id: "22",
        value: "T-Mobile Park",
        address: "1250 1st Ave S, Seattle, WA 98134",
    },
    {
        id: "23",
        value: "Tractor Tavern",
        address: "5213 Ballard Ave NW, Seattle, WA 98107",
    },
    {
        id: "24",
        value: "The Vera Project",
        address: "305 Harrison St, Seattle, WA 98109",
    },
    {
        id: "25",
        value: "WaMu Theatre",
        address: "800 Occidental Ave S, Seattle, WA 98134",
    },    
    {
        id: "26",
        value: "White River Ampetheatre",
        address: "40601 Auburn Enumclaw Rd SE, Auburn, WA 98092",
    }
];

const genreArray = [
    {
        id: "0",
        value: "Select a Genre"
    },
    {
        id: "1",
        value: "Alternative"
    },
    {
        id: "2",
        value: "Country"
    },
    {
        id: "3",
        value: "Electronic"
    },
    {
        id: "4",
        value: "Folk"
    },
    {
        id: "5",
        value: "Hip Hop"
    },
    {
        id: "6",
        value: "Jazz"
    },
    {
        id: "7",
        value: "Metal"
    },
    {
        id: "8",
        value: "Pop"
    },
    {
        id: "9",
        value: "Rap"
    },
    {
        id: "10",
        value: "Reggae"
    },
    {
        id: "11",
        value: "Rock"
    }
];


class NewEventForm extends Component {

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

    //run a function to get venues and fill the array. pass props. 
    //react 19 ex. 25 & 26

    viewRes = (res) => {
        console.log("response" + res)
    }

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
                    this.setState({
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
                    value={this.state.artist}
                    onChange={this.handleInputChange}
                    placeholder="Artist"
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
                    value={this.state.doorTime}
                    onChange={this.handleInputChange}
                    placeholder="Doors Open (hh:mm)"
                />

                <SelectVenue
                    label={"Venue:"}
                    name="venue"
                    address="address"
                    arrayOfData={venueArray}
                    handleChange={this.handleVenueInputChange}
                />

                <Select
                    label={"Genre:"}
                    name="genre"
                    arrayOfData={genreArray}
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
                    label={"Image (1:2 image ratio recommended):"}
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