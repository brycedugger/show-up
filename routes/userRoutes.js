const db = require("../models");

module.exports = (app) => {
    
    // route to get the user data from the User DB
    app.get("/api/user/all", (req, res) => {
        db.User.find().then(user => {
            res.status(200).json(user);
        }).catch(err => {
            res.status(400).json(err);
        });
    });

    app.get("/api/user/:_id", (req, res) => {
        db.User.findById({_id: req.params.id}).then(user => {
            res.status(200).json(user);
        }).catch(err => {
            res.status(400).json(err);
        });
    });

    // route to create a user in the db
    app.post("/api/user/", (req, res) => {
        console.log("User " + (
            req.body.firstName
        ) + " has been added.")
        console.log("req.params" + (
            JSON.stringify(req.body)
        ))

        const {firstName, lastName, userName} = req.body;

        db.User.create({firstName, lastName, userName}).then(savedUser => {
            res.status(200).json(savedUser);
        }).catch(err => {
            res.status(400).json(err);
        })
    });
};

// const getUserData = db.collection(userSeed).find({userName: "janesmith"});

console.log(getUserData);