const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/show-up", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSeed = [{
        id: 1,
        "firstName": "Jane",
        "lastName": "Smith",
        "userName": "janesmith",
        "saved": [1, 2, 3],
        "created": [1, 2],
        "upvoted": [4, 5, 6]
    },];

db.User.remove({}).then(() => db.User.collection.insertMany(userSeed)).then(data => {
    console.log(data.result.n + " user data inserted!");
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
});
