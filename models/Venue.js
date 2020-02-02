const mongoose = require("mongoose");

const VenueSchema = mongoose.Schema({
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
