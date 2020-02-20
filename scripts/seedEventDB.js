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
    description: "You better buckle in because this show sure gonna be lit",
    image: "https://video-images.vice.com/articles/5c59748eafd7ee0007ba3c2c/lede/1549367384283-Maribou-State_Interview_AlexandraWae-2.jpeg?crop=1xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A*"
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
    description: "Slip slop slippity snop it's Jungle and Houses here tonight",
    image: "https://www.billboard.com/files/styles/article_main_image/public/media/Jungle-press-photo-2018-cr-Charlie-Di-Placido-billboard-1548.jpg"
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
    description: "Imma be honest I have no idea who these people are",
    image: "https://img.texasmonthly.com/2020/02/Khruangbin-LeonBridges-Texas-Sun.jpg?auto=compress&crop=faces&fit=crop&fm=jpg&h=1050&ixlib=php-1.2.1&q=45&w=1400"
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
    description: "Bryce said these guys are lit so there's that",
    image: "https://media.stubhubstatic.com/stubhub-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,dpr_2.0,$w_750,$h_416/performer/731790/ydancuskxrvobfrm6qrb"
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
    description: "Lumberjacks? Portland natives? There is no way to know",
    image: "https://media.pitchfork.com/photos/5ba3aa2a4899de2cf8705ae0/2:1/w_790/Fleet-Foxes.jpg"
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
    description: "These guys look so uninterested in every photo of them wow",
    image: "https://spillmagazine.com/wp-content/uploads/2019/05/Local-Natives-02-1.jpg"
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
    description: "You will Oh See this guy's tongue in the photo",
    image: "https://consequenceofsound.net/wp-content/uploads/2018/06/thee-oh-sees-c-david-brendan-hall.png"
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
    description: "He must have some really nice teeth",
    image: "https://fq8ku9wqwk7gai1z3frl16nd-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/AQ6A8495-1200x630.jpg"
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
    description: "Who knew that Tame Impala was just a single guy?",
    image: "https://media.pitchfork.com/photos/5c3a5d766250af5b8085c844/2:1/w_790/Tame%20Impala%202.png"
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
    description: "I too have no idea where the second guy's chin is",
    image: "https://nearbynews.com/wp-content/uploads/2019/08/2-726x400.jpg"
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
    description: "Dave in the middle forgot his leather jacket",
    image: "https://consequenceofsound.net/wp-content/uploads/2020/02/The-Strokes.jpg?quality=80&w=807"
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
    description: "He looks like the guy who won't ghost you",
    image: "https://capturedtracks.com/files/Coley-Brown-9784.jpg"
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
    description: "Rufus was the name of the naked mole rat in Kim Possible",
    image: "https://media.stubhubstatic.com/stubhub-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,dpr_2.0,$w_750,$h_416/performer/1504769/n0jdnxgnczvqckljictj"
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
