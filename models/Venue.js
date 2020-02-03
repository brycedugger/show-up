const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VenueSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    location: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model("Venue", VenueSchema);