const db = require("../models");
const secret = process.env.SECRET_KEY;
const verifyToken = require('../config/middleware/verifyToken');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = (app, jwt) => {

    // GET ROUTES
    //------------------------------------------------------------------


    // route to get the user data from the User DB
    app.get("/api/user/all", (req, res) => {
        db.User.find().then(user => {
            res.status(200).json(user);
        }).catch(err => {
            res.status(400).json(err);
        });
    });


    // route to get the user's model using the userId from the token
    app.get("/api/user", verifyToken, (req, res) => {
        jwt.verify(req.token, secret, (err, token) => {
            if (err) {
                // console.log(err)
                res.status(403).json({ error: 'Token is invalid.' });
            } else {
                db.User.findById({ _id: token.user._id })
                    .populate("saved")
                    .populate("created")
                    .then(user => {
                        res.status(200).json(user);
                    }).catch(err => {
                        res.status(400).json({ error: err });
                    }
                    );
            }
        });
    });

    // POST ROUTES
    //------------------------------------------------------------------

    // route to create a user in the db
    app.post("/api/user/", (req, res) => {
        console.log("User " + (
            req.body.firstName
        ) + " has been added.")
        console.log("req.params" + (
            JSON.stringify(req.body)
        ))

        const { firstName, lastName, userName } = req.body;

        db.User.create({ firstName, lastName, userName }).then(savedUser => {
            res.status(200).json(savedUser);
        }).catch(err => {
            res.status(400).json(err);
        })
    });


    // PUT ROUTES
    //------------------------------------------------------------------

    app.put("/api/user/:_id", (req, res) => {

        db.User.findByIdAndUpdate(
            { _id: req.body.userId},
            { $push: { created: req.params._id } },
            { useFindAndModify: false }
        )
            .then(event => {
                res.status(200).json(event);
            })
            .catch(err => {
                res.status(400).json({ error: err });
            });
            
    });

    app.put("/api/eUser/:_id", (req, res) => {

        console.log("req.body" + (JSON.stringify(req.body)))
        console.log("req.param" + (req.params._id))

        const {
            id, firstName, lastName, username,
            email, password
        } = req.body;

        db.User.findByIdAndUpdate(
            { _id: req.params._id },

            { firstName, lastName, username, email, password },

            { useFindAndModify: false })

            .then(dbUser => {
                res.status(200).json(dbUser);
            
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    // Add event to user's bookmarks
    app.put("/api/bookmark", (req, res) => {
        let username = req.body.username;
        let eventId = req.body.eventId;

        db.User.findOneAndUpdate(
            { "username": username },
            { $push: { saved: ObjectId(eventId) } })
            .then(user => {
                res.status(200).json(user);
            })
            .catch(err => {
                res.status(200).json(err);
            });
    });

    // DELETE ROUTES
    //------------------------------------------------------------------

    // route to delete ONE user from the DB
    app.delete("/api/user/:_id", (req, res) => {

        console.log("req.params" + (JSON.stringify(req.params._id)))

        db.User.deleteOne({ _id: req.params._id })
            .then(deletedUser => {
                res.status(200).json(deletedUser);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
}