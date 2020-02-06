const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Events collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/event-data"
);

//date: "yyyy-mm-ddTTH:mm:ss"

const eventSeed = [
  {
    title: "Kingdoms In Colour - Album Live Tour",
    headliner: "Maribou State",
    openers: "Sea Moya",
    upvotes: 30,
    date: "2020-3-31",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "Electronic",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "Showbox at the Market",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "Showbox Presents",
    headliner: "Jungle",
    openers: "Houses",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "Electronic",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "Showbox Sodo",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "North American Fall 2020 Tour",
    headliner: "Khruangbin",
    openers: "Will Van Horn",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "Indie",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "The Moore Theatre",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "USA & Canada 2020",
    headliner: "King Gizzard and the Lizard Wizard",
    openers: "The Murlocs",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "Metal",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "Showbox Sodo",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "Crack-Up Album Tour",
    headliner: "Fleet Foxes",
    openers: "Chris Cohen",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "Folk",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "Paramount Theatre",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "",
    headliner: "Local Natives",
    openers: "Foals & Cherry Glazerr",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    venue: "Neptune Theatre",
    description: "To be filled with LastFM API",
    genre: "Indie",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "Neptune Theatre",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "KEXP & Neumos Present",
    headliner: "Oh Sees",
    openers: "Malaikat Dan Singa",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "Metal",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "Neumos",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "Best Teef In The Game Tour '19",
    headliner: "Anderson .Paak",
    openers: "Earl Sweatshirt & Thundercat",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "Hip-Hop",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "WaMu Theatre",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "The Slow Rush North American Tour",
    headliner: "Tame Impala",
    openers: "Perfume Genius",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "Pop",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "The Gorge Ampetheatre",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "Good Vibes Summer Tour 2020",
    headliner: "Rebelution",
    openers: "Steel Pulse, The Green, Keznamdi, & DJ Mackle",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "Reggae",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "Marymoor Park",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "",
    headliner: "The Strokes",
    openers: "Alvvays",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "Rock",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "WaMu",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "STG Presents",
    headliner: "Mac Demarco",
    openers: "Donnie Benet",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "indie",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "Showbox Sodo",
        location: "xxxy address"
      }
    ]
  },
  {
    title: "Solace Tour 2019",
    headliner: "RÜFÜS DU SOL",
    openers: "",
    upvotes: 30,
    date: "2020-3-30",
    time: "21:30",
    description: "To be filled with LastFM API",
    genre: "Electronic",
    imgur: "To be filled with LastFM API",
    venue: [
      {
        name: "WaMu Theatre",
        location: "xxxy address"
      }
    ]
  }
];

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " events inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
