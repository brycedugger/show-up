const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Events collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/show-up"
);

//date: "yyyy-mm-ddTTH:mm:ss"

const venueSeed = [
  {
    name: "Showbox at the Market",
    location: "TBD",
  }
];

db.Venue
  .remove({})
  .then(() => db.Venue.collection.insertMany(venueSeed))
  .then(data => {
    console.log(data.result.n + " venues inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
