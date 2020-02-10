const db = require("../models");

module.exports = (app) => { // route to get the user data from the User DB
    app.get("/api/profile", (req, res) => {
        db.userSeed.find().then(user => {
            res.status(200).json(user);
        }).catch(err => {
            res.status(400).json(err);
        });
    })
     
    // route to create a user in the db
    app.post("/api/profile", (req, res) => {
        const {
            firstName,
            lastName,
            userName,
        }
    })
}

const getUserData = db.collection(userSeed).find({userName: "janesmith"});

console.log(getUserData);