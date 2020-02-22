import axios from "axios";

export default {

  // Gets all events
  getEvent: () => {
    return axios.get("/api/events/all");
  },

  // Gets one event
  getOneEvent: (_id) => {
    return axios.get("/api/events/" + _id);
  },

  upvoteEvent: (_id) => {
    return axios.put("/api/upvote/" + _id);
  },

  createComment: (req) => {
    return axios.post("/api/comment", req);
  },

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
    return axios.put("/api/events/" + obj._id,
     obj
    );
  },

  // Deletes the book with the given id
  deleteEvent: (obj) => {
    console.log("id of event " + JSON.stringify((obj._id)))
    return axios.delete("/api/events/" + obj._id);
  },

  artistSearch: (artist,) => {
    const apiKey = process.env.REACT_APP_LAST_FM;
    return axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${apiKey}&format=json`);
  },

};