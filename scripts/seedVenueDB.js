const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();
const db_name = process.env.DB_NAME;

// This file empties the Venues collection and inserts the events below

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${db_name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//date: "yyyy-mm-ddTTH:mm:ss"

const venueSeed = [
  {
      name: "Barboza",
      location: "925 E Pike St, Seattle, WA 98122",
  },
  {
      name: "CenturyLink Field",
      location: "800 Occidental Ave S, Seattle, WA 98134",
  },
  {
      name: "Chop Suey",
      location: "1325 E Madison St, Seattle, WA 98122",
  },
  {
      name: "The Crocodile",
      location: "2200 2nd Ave, Seattle, WA 98121",
  },
  {
      name: "Dimitriou's Jazz Alley",
      location: "2033 6th Ave, Seattle, WA 98121",
  },
  {
      name: "El Corazon",
      location: "109 Eastlake Ave E, Seattle, WA 98109",
  },
  {
      name: "The Gorge Ampetheatre",
      location: "754 Silica Rd NW, George, WA 98848",
  },
  {
      name: "Marymoor Park",
      location: "6046 West Lake Sammamish Pkwy NE, Redmond, WA 98052",
  },
  {
      name: "Monkey Loft",
      location: "2915 1st Ave S, Seattle, WA 98134",
  },
  {
      name: "Moore Theatre",
      location: "1932 2nd Ave, Seattle, WA 98101",
  },
  {
      name: "Nectar Lounge",
      location: "412 N 36th St, Seattle, WA 98103",
  },
  {
      name: "Neptune Theatre",
      location: "1303 NE 45th St, Seattle, WA 98105",
  },
  {
      name: "Neumos",
      location: "925 E Pike St, Seattle, WA 98122",
  },
  {
      name: "Paramount Theatre",
      location: "911 Pine St, Seattle, WA 98101",
  },
  {
      name: "Q Nightclub",
      location: "1426 Broadway, Seattle, WA 98122",
  },
  {
      name: "ShoWare Center",
      location: "625 W James St, Kent, WA 98032",
  },
  {
      name: "Showbox at the Market",
      location: "1426 1st Ave, Seattle, WA 98101",
  },
  {
      name: "Showbox SoDo",
      location: "1700 1st Ave S, Seattle, WA 98134",
  },
  {
      name: "The Sunset Tavern",
      location: "5433 Ballard Ave NW, Seattle, WA 98107",
  },
  {
      name: "Tacoma Dome",
      location: "2727 E D St, Tacoma, WA 98421",
  },
  {
      name: "The Triple Door",
      location: "216 Union St, Seattle, WA 98101",
  },
  {
      name: "T-Mobile Park",
      location: "1250 1st Ave S, Seattle, WA 98134",
  },
  {
      name: "Tractor Tavern",
      location: "5213 Ballard Ave NW, Seattle, WA 98107",
  },
  {
      name: "The Vera Project",
      location: "305 Harrison St, Seattle, WA 98109",
  },
  {
      name: "WaMu Theatre",
      location: "800 Occidental Ave S, Seattle, WA 98134",
  },    
  {
      name: "White River Ampetheatre",
      location: "40601 Auburn Enumclaw Rd SE, Auburn, WA 98092",
  }
];

db.Venue
  .deleteMany({})
  .then(() => db.Venue.collection.insertMany(venueSeed))
  .then(data => {
    console.log(data.result.n + " venues inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
