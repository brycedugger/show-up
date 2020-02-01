const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  date: { 
      type: String,
      trim: true,
      required: true 
    },
});

module.exports = mongoose.model("Comment", CommentSchema);
