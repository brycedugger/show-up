const db = require("../models");
const apiKey = process.env.lastfm;

module.exports = app => {
  // route to get all events from the DB
  app.get("/api/events/all", (req, res) => {
    db.Event.find()
      .then(events => {
        res.status(200).json(events);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/events/:_id", (req, res) => {
    db.Event.findById({ _id: req.params._id })
      .then(events => {
        res.status(200).json(events);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //------------------------------------------------------------------

  // route to create a event in the DB
  app.post("/api/events/", (req, res) => {
    console.log("hello from routes post " + req.body.title);
    console.log("req.params" + JSON.stringify(req.body));

    const {
      title,
      headliner,
      openers,
      date,
      time,
      venue,
      address,
      genre,
      description,
      image
    } = req.body;

    db.Event.create({
      title,
      headliner,
      openers,
      date,
      time,
      venue,
      address,
      genre,
      description,
      image
    })
      .then(savedEvent => {
        res.status(200).json(savedEvent);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //------------------------------------------------------------------

  // route to update ONE event from the DB
  app.put("/api/events/:_id", (req, res) => {
    const {
      title,
      headliner,
      openers,
      date,
      time,
      venue,
      address,
      genre,
      description,
      image
    } = req.body;
    console.log("req.body" + JSON.stringify(req.body));
    console.log("req.param" + req.params._id);

    db.Event.findByIdAndUpdate(
      { _id: req.params._id },

      {
        title,
        headliner,
        openers,
        date,
        time,
        venue,
        address,
        genre,
        description,
        image
      },

      { useFindAndModify: false }
    )

      .then(dbEvent => {
        res.status(200).json(dbEvent);
      })
      .catch(err => {
        res.status(200).json(err);
      });
  });

  //------------------------------------------------------------------

  // route to delete ONE event from the DB
  app.delete("/api/events/:_id", (req, res) => {
    // console.log("req.params" + (JSON.stringify(req.params._id)))

    db.Event.deleteOne({ _id: req.params._id })
      .then(deletedEvent => {
        res.status(200).json(deletedEvent);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //------------------------------------------------------------------
//   app.post("/api/artistInfo/:artist", (req, res) => {
//     // let artist = req.body.artistName;
//     const queryURL =
//       "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=";
//     queryURL += artist;
//     queryURL += "&api_key=";
//     queryURL += apiKey;
//     queryURL += "&format=json";

//     console.log(queryURL);

//     axios.get(queryURL)
//     .then(function(response) {
//       console.log(response);
//       res.json(response);
//     })
//     .catch(err => console.log(err));
//   });
};
