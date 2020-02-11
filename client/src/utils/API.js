import axios from "axios";


//Script to call our API's via functions in our components.

//Route to which database shall be revised if using more than one db
//not called events.

export default {

  // Gets all events
  getEvent: () => {
    return axios.get("/api/events/all");
  },

  // Gets one event
  getOneEvent: (_id) => {
    return axios.get("/api/events/" + _id);
  },

  // Add Event Search by artist
  // eventSearch: () => {
  //   return axios.get("/api/events" + id);
  // },


  // Saves a event to the database
  saveEvent: (
    title, headliner, openers,
    date, time, venue, address,
    genre, description, image
  ) => {
    return axios.post("/api/events",
      title, headliner, openers,
      date, time, venue, address,
      genre, description, image
    );
  },

  // updates one event in the database with id of _id
  updateEvent: (obj) => {
    console.log("id " + JSON.stringify((obj)))
    console.log("title" + JSON.stringify((obj.title)))
    return axios.put("/api/events/" + obj._id,
     obj
    );
  },

  // Deletes the book with the given id
  deleteEvent: (obj) => {
    console.log("id of event " + JSON.stringify((obj._id)))
    return axios.delete("/api/events/" + obj._id);
  },

  artistSearch: (artist) => {
    const apiKey = process.env.lastfm;
    return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${apiKey}&format=json`);
  },

};