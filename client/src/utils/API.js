import axios from "axios";

//Script to call our API's via functions in our components.

//Route to which database shall be revised if using more than one db
//not called events.

export default {

  // Gets all events
  getEvent: () => {
    return axios.get("/api/events/all");
  },

  // Gets all events
  getOneEvent: (eventId) => {
    return axios.get("/api/events/" + eventId);
  },

  // Add Event Search by artist
  // eventSearch: () => {
  //   return axios.get("/api/events" + id);
  // },

<<<<<<< HEAD
  
  //Add get single event
  getSingleEvent: (eventId) => {
    return axios.get("/api/events/" + eventId);
  },
=======
>>>>>>> 55b62d4d8a6f3aa57f0e9a9c219411b9ad1ea8de

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

  // updates event in the database
  updateEvent: (
    eventId, title, headliner, openers,
    date, time, venue, address,
    genre, description, image
  ) => {
    return axios.put("/api/events/" + eventId,
      title, headliner, openers,
      date, time, venue, address,
      genre, description, image
    );
  },

  // Deletes the book with the given id
  deleteEvent: (eventId) => {
    return axios.delete("/api/events/" + eventId);
  }

};