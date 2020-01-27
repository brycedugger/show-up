import axios from "axios";

//Script to call our API's via functions in our components.

//Route to which database shall be revised if using more than one db
//not called events.

export default {
  
  // Gets all events
  getBooks: () => {
    return axios.get("/api/events");
  },

  // Deletes the book with the given id
  deleteEvent: (eventId) => {
    return axios.delete("/api/events/" + eventId);
  },

  // Saves a book to the database
  saveEvent: (
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
