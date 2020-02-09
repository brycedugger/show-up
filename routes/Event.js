const db = require("../models");

module.exports = (app) => {

    // route to get all events from the DB
    app.get("/api/events", (req, res) => {
        db.Event.find()
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
        console.log("hello from routes post" + (req.body.title))


        const {
            title, headliner, openers,
            date, time, venue, address,
            genre, description, image

            //fill in required parameters from API.js and models

        } = req.body;

        db.Event.create({
            title, headliner, openers,
            date, time, venue, address,
            genre, description, image

        //date and time showing as below
        // "date" : ISODate("2001-01-01T08:00:00Z"),
        // "time" : ISODate("2001-01-01T08:00:00Z"),

            //fill in required parameters from API.js and models

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
    app.put("/api/events/unsave/:id", (req, res) => {
        db.Event.updateOne({ _id: req.params.id }, { saved: false })
            .then(dbEvent => {
                res.status(200).json(dbEvent);
            })
            .catch(err => {
                res.status(200).json(err);
            });
    });


    //------------------------------------------------------------------


    // route to delete ONE event from the DB
    app.delete("/api/events/:eventId", (req, res) => {
        const { eventId } = req.params;

        db.Event.deleteOne({ eventId: eventId })
            .then(deletedEvent => {
                res.status(200).json(deletedEvent);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    // route to delete ALL events from the DB
    app.delete("/api/events/", (req, res) => {
        const { eventId } = req.params;

        db.Event.deleteMany({})
            .then(deletedEvents => {
                res.status(200).json(deletedEvents);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
};