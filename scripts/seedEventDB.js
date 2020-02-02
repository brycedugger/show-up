const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Events collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/show-up"
);

//date: "yyyy-mm-ddTTH:mm:ss"

const eventSeed = [
  {
    artist: "Maribou State",
    opener: "Sea Moya",
    title: "Kingdoms In Colour - Album Live Tour",
    date: "2020-3-31",
    doortime: "20:30",
    showtime: "21:30",
    venue: "Showbox at the Market",
    description: "To be filled with LastFM API",
    genre: "Electronic",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "Jungle",
    opener: "Houses",
    title: "Showbox Presents",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "Showbox Sodo",
    description: "To be filled with LastFM API",
    genre: "Electronic",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "Khruangbin",
    opener: "Will Van Horn",
    title: "North American Fall 2020 Tour",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "The Moore Theatre",
    description: "To be filled with LastFM API",
    genre: "Indie",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "King Gizzard and the Lizard Wizard",
    opener: "The Murlocs",
    title: "USA & Canada 2020",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "Showbox Sodo",
    description: "To be filled with LastFM API",
    genre: "Metal",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "Fleet Foxes",
    opener: "Chris Cohen",
    title: "Crack-Up Album Tour",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "Paramount Theatre",
    description: "To be filled with LastFM API",
    genre: "Folk",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "Local Natives",
    opener: "Foals & Cherry Glazerr",
    title: "",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "Neptune Theatre",
    description: "To be filled with LastFM API",
    genre: "Indie",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "Oh Sees",
    opener: "Malaikat Dan Singa",
    title: "KEXP & Neumos Present",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "Metal",
    description: "To be filled with LastFM API",
    genre: "Electronic",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "Anderson .Paak",
    opener: "Earl Sweatshirt & Thundercat",
    title: "Best Teef In The Game Tour '19",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "WaMu Theatre",
    description: "To be filled with LastFM API",
    genre: "Hip-Hop",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "Tame Impala",
    opener: "Perfume Genius",
    title: "The Slow Rush North American Tour",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "The Gorge Ampetheatre",
    description: "To be filled with LastFM API",
    genre: "Pop",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "Rebelution",
    opener: "Steel Pulse, The Green, Keznamdi, & DJ Mackle",
    title: "Good Vibes Summer Tour 2020",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "Marymoor Park",
    description: "To be filled with LastFM API",
    genre: "Reggae",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "The Strokes",
    opener: "Alvvays",
    title: "",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "WaMu Theatre",
    description: "To be filled with LastFM API",
    genre: "Rock",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "Mac Demarco",
    opener: "Donnie Benet",
    title: "STG Presents",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "Showbox Sodo",
    description: "To be filled with LastFM API",
    genre: "indie",
    image: "To be filled with LastFM API",
    upvotes: 30
  },
  {
    artist: "RÜFÜS DU SOL",
    opener: "",
    title: "Solace Tour 2019",
    date: "2020-3-30",
    doortime: "20:30",
    showtime: "21:30",
    venue: "WaMu Theatre",
    description: "To be filled with LastFM API",
    genre: "Electronic",
    image: "To be filled with LastFM API",
    upvotes: 30
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
