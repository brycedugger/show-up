import axios from "axios";

//Script to call our API's via functions in our components.

//Route to which database shall be revised if using more than one db
//not called events.

export default {
  
  // Gets all events
  getEvent: () => {
    return axios.get("/api/events");
  },

  // Add Event Search
  // eventSearch: () => {
  //   return axios.get("/api/events" + id);
  // },

  
  //Add get single event


  // Deletes the book with the given id
  deleteEvent: (eventId) => {
    return axios.delete("/api/events/" + eventId);
  },

  // Saves a event to the database
  saveEvent: function(
    title, headliner, openers,
    date, time, venue, address,
    genre, description, image
    ) {
    return axios.post("/api/events",
    title, headliner, openers,
    date, time, venue, address,
    genre, description, image
    );
  },

    // updates a book to the database
    updateEvent: (
      eventId,
      artist,
      date,
      //fill in all event parameters used in mongo db
      ) => {
      return axios.post(`/api/events`,
      eventId, 
      artist,
      date,
      //copy parameters from above
      );
    }
};