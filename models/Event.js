const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  headliner: {
    type: String,
    trim: true,
    required: true
  },
  openers: {
    type: String,
    trim: false
  },
  upvotes: {
    type: Number,
    default: 0
  },
  date: {
    type: String,
    trim: true,
    required: true
  },
  time: {
    type: String,
    trim: true,
    required: true
  },
  venue: {
    type: String,
    trim: true,
    required: true
  },
  address: {
    type: String,
    trim: true,
    required: true
  },
  genre: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: false
  },
  image: {
    type: String,
    trim: true,
    required: true
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Event", EventSchema);