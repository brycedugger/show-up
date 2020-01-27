const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  eventId: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  artist: {
    type: String,
    trim: true,
    required: true
  },
  date: { 
      type: String,
      trim: true,
      required: true 
    },

    //fill in required parameters used in /utils/APi.js
    //and corresponding API routes in the routes foler
});

module.exports = mongoose.model("Event", EventSchema);