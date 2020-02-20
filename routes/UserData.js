const db = require("../models");
const secret = process.env.SECRET_KEY;
const verifyToken = require('../config/middleware/verifyToken');

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
}

// DELETE ROUTES
//------------------------------------------------------------------
