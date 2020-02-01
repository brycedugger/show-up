const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
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
            ref: "Event",
            unique: true
        }
    ],
    created: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event",
            unique: true
        }
    ],
    upvoted: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event",
            unique: true
        }
    ]

    //fill in required parameters used in /utils/APi.js
    //and corresponding API routes in the routes foler
});

module.exports = mongoose.model("User", UserSchema);