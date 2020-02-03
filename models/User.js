const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    userName: {
        type: String,
        trim: true,
        required: true
    },
    saved: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event"
        }
    ],
    created: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event"
        }
    ],
    upvoted: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event"
        }
    ]

    //fill in required parameters used in /utils/APi.js
    //and corresponding API routes in the routes foler
});

module.exports = mongoose.model("User", UserSchema);