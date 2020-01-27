const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/show-up`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);

// Define API routes here
require("./routes/event")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// start the server
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}. Visit http://localhost:${PORT}/`)
);