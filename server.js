const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// for tokens
const jwt = require("jsonwebtoken"); 
// passport
const passport = require("passport");
const session = require("express-session");

// initialize express
const app = express();
const PORT = process.env.PORT || 4000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// middleware: passport
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
require('./config/middleware/passport')(passport, db);

// connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/show-up`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);

// Define API routes here
require("./routes/eventRoutes")(app);
require("./routes/auth")(app, passport, jwt);
// require("./routes/userRoutes")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// start the server
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}. Visit http://localhost:${PORT}/`)
);

module.exports = app;