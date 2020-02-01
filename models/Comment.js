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
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Comment", CommentSchema);
