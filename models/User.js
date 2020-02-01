const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  saved: [
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