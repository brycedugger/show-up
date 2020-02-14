const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
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
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
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
    ]

    //fill in required parameters used in /utils/APi.js
    //and corresponding API routes in the routes foler
});

module.exports = mongoose.model("User", UserSchema);