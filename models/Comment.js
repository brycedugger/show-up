const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model("Comment", CommentSchema);
