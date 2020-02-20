const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();
const db_name = process.env.DB_NAME;

// This file empties the Events collection and inserts the events below

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${db_name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//date: "yyyy-mm-ddTTH:mm:ss"

const eventSeed = [
  {
    title: "Kingdoms In Colour - Album Live Tour",
    headliner: "Maribou State",
    openers: "Sea Moya",
    upvotes: 30,
    date: "2020-3-31",
    time: "21:30",
    venue: "Showbox at the Market",
    address: "1426 1st Ave, Seattle, WA 98101",
    genre: "Electronic",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "Showbox Presents",
    headliner: "Jungle",
    openers: "Houses",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "Showbox Sodo",
    address: "1700 1st Ave S, Seattle, WA 98134",
    genre: "Electronic",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "North American Fall 2020 Tour",
    headliner: "Khruangbin",
    openers: "Will Van Horn",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "Moore Theatre",
    address: "1932 2nd Ave, Seattle, WA 98101",
    genre: "Indie",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "USA & Canada 2020",
    headliner: "King Gizzard and the Lizard Wizard",
    openers: "The Murlocs",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "Showbox Sodo",
    address: "1700 1st Ave S, Seattle, WA 98134",
    genre: "Metal",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "Crack-Up Album Tour",
    headliner: "Fleet Foxes",
    openers: "Chris Cohen",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "Paramount Theatre",
    address: "911 Pine St, Seattle, WA 98101",
    genre: "Folk",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "",
    headliner: "Local Natives",
    openers: "Foals & Cherry Glazerr",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "Neptune Theatre",
    address: "1303 NE 45th St, Seattle, WA 98105",
    genre: "Indie",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "KEXP & Neumos Present",
    headliner: "Oh Sees",
    openers: "Malaikat Dan Singa",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "Neumos",
    address: "925 E Pike St, Seattle, WA 98122",
    genre: "Punk",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "Best Teef In The Game Tour '19",
    headliner: "Anderson .Paak",
    openers: "Earl Sweatshirt & Thundercat",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "WaMu Theatre",
    address: "800 Occidental Ave S, Seattle, WA 98134",
    genre: "Hip-Hop",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "The Slow Rush North American Tour",
    headliner: "Tame Impala",
    openers: "Perfume Genius",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "The Gorge Ampetheatre",
    address: "xxx",
    genre: "Pop",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "Good Vibes Summer Tour 2020",
    headliner: "Rebelution",
    openers: "Steel Pulse, The Green, Keznamdi, & DJ Mackle",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "Marymoor Park",
    address: "6046 West Lake Sammamish Pkwy NE, Redmond, WA 98052",
    genre: "Reggae",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "",
    headliner: "The Strokes",
    openers: "Alvvays",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "WaMu Theatre",
    address: "800 Occidental Ave S, Seattle, WA 98134",
    genre: "Alternative",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "STG Presents",
    headliner: "Mac Demarco",
    openers: "Donnie Benet",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "Showbox Sodo",
    address: "1700 1st Ave S, Seattle, WA 98134",
    genre: "Indie",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  },
  {
    title: "Solace Tour 2019",
    headliner: "RÜFÜS DU SOL",
    openers: "",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "WaMu Theatre",
    address: "800 Occidental Ave S, Seattle, WA 98134",
    genre: "Electronic",
    description: "To be filled with LastFM API",
    image: "To be filled with LastFM API"
  }
];

db.Event
  .deleteMany({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " events inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
