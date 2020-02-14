const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/show-up", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSeed = [{
    "email": "bryce.dugger@outlook.com",
    "firstName": "Bryce",
    "lastName": "Dugger",
    "username": "bdugger",
    "password": "$2a$08$FThZYKtqROUSxQmRoMA4Ve5n8DYOAyCGjijdXJbs802xMX.B6PF4.",
    //showupapp is non encrypted version
    "saved": [],
    "created": [],
},];

db.User
    .deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " user data inserted!");
        process.exit(0);
    }).catch(err => {
        console.error(err);
        process.exit(1);
    });
