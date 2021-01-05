const mongoose = require("mongoose");
const db = require("../models");

// This file inserts the users below
// Use: npm run seed

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/barteringapp"
);

const userSeed = [
  {
    _id: "564525252",
    firstname: "Neil",
    lastname: "deGrasse Tyson",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    email: "ntyson@haydenplanetarium.edu",
    city: "Austin",
    state: "Texas",
    traveldist: "100 miles",
    phone: "1-212-769-5100",
    paypaluser:"neiltyson",
    skills: ["lawn care","landscaping", "tree trimming"],
    reviews: [],
    photourl: "https://randomuser.me/api/portraits/men/6.jpg",
    bio: "Your shields were failing, sir. Not if I weaken first. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation",
    date: new Date(Date.now())
  },
  {
    _id: "354198163",
    firstname: "Peggy",
    lastname: "Hill",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    email: "mrspeggyhill@teachersofarlen.com",
    city: "Allen",
    state: "Texas",
    traveldist: "50 miles",
    phone: "1-469-202-5775",
    paypaluser:"peggyhill",
    skills: ["tutoring","spanish tutoring"],
    reviews: [],
    photourl: "https://randomuser.me/api/portraits/women/45.jpg",
    bio:"Your shields were failing, sir. Not if I weaken first. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation",
    date: new Date(Date.now())
  },
  {
    _id: "asdrf54964186541",
    firstname: "Walter",
    lastname: "White",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    email: "heisenberg@bluesky.com",
    city: "San Antonio",
    state: "Texas",
    traveldist: "100 miles",
    phone: "1-505-866-8650",
    paypaluser:"walterwhite",
    skills: ["financial planning","tax preparation", "accounting"],
    reviews: [],
    photourl: "https://randomuser.me/api/portraits/women/40.jpg",
    bio:"Your shields were failing, sir. Not if I weaken first. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation",
    date: new Date(Date.now())
  },
  {
    _id: "5a5sd4fa5fde889l",
    firstname: "Liz",
    lastname: "Lemon",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    email: "lizlemon@cbs.com",
    city: "Austin",
    state: "Texas",
    traveldist: "10 miles",
    phone: "1-212-424-6677",
    paypaluser:"lizlemon",
    skills: ["reiki","energy healing", "reflexology"],
    reviews: [],
    photourl: "https://randomuser.me/api/portraits/women/10.jpg",
    bio:"Your shields were failing, sir. Not if I weaken first. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation",
    date: new Date(Date.now())
  },
  {
    _id: "4588klfjasd5s5fasd",
    firstname: "Jon",
    lastname: "Snow",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    email: "jsnow@nightswatch.com",
    city: "New Braunfels",
    state: "Texas",
    traveldist: "50 miles",
    phone: "1-210-667-8907",
    paypaluser:"snowj",
    skills: ["blacksmithing","ferrier", "welding"],
    reviews: [],
    photourl: "https://randomuser.me/api/portraits/men/45.jpg",
    bio:"Your shields were failing, sir. Not if I weaken first. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation",
    date: new Date(Date.now())
  },
  {
    _id: "235asd65df456",
    firstname: "Lucille",
    lastname: "Bluth",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    email: "lucille@bluthco.com",
    city: "Houston",
    state: "Texas",
    traveldist: "200 miles",
    phone: "1-303-456-8976",
    paypaluser:"lucillebluth",
    skills: ["mixology", "bartending", "sommelier"],
    reviews: [],
    photourl: "https://randomuser.me/api/portraits/women/15.jpg",
    bio:"Your shields were failing, sir. Not if I weaken first. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation",
    date: new Date(Date.now())
  },
  {
    _id: "6rg45eth456",
    firstname: "Tony",
    lastname: "Soprano",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    email: "tsoprano@notamobster.com",
    city: "Boerne",
    state: "Texas",
    traveldist: "100 miles",
    phone: "1-210-388-9076",
    paypaluser:"tonysoprano",
    skills: ["plumbing","handyman", "small home repair"],
    reviews: [],
    photourl: "https://randomuser.me/api/portraits/men/21.jpg",
    bio:"Your shields were failing, sir. Not if I weaken first. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation",
    date: new Date(Date.now())
  },
  {
    _id: "thn415869dfgb416ajm",
    firstname: "Jeremy",
    lastname: "Henry",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    email: "jhenry@itsjustjavascript.com",
    city: "San Antonio",
    state: "Texas",
    traveldist: "25 miles",
    phone: "1-210-908-7865",
    paypaluser:"jeremyhenry",
    skills: ["magic","javascript", "wiring up", "drilling down"],
    reviews: [],
    photourl: "https://randomuser.me/api/portraits/lego/2.jpg",
    bio:"Your shields were failing, sir. Not if I weaken first. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation",
    date: new Date(Date.now())
  },
  {
    _id: "gvuil482vq48asdf456",
    firstname: "Lisa",
    lastname: "Turtle",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    email: "lturtle@savedbythebell.com",
    city: "San Antonio",
    state: "Texas",
    traveldist: "20 miles",
    phone: "1-210-772-1192",
    paypaluser:"lisasitter",
    skills: ["babysitting","childcare"],
    reviews: [],
    photourl: "https://randomuser.me/api/portraits/women/4.jpg",
    bio:"Your shields were failing, sir. Not if I weaken first. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation",
    date: new Date(Date.now())
  },
  {
    _id: "lojka456486g",
    firstname: "Homer",
    lastname: "Simpson",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    email: "homersimpson@donuts.com",
    city: "San Marcos",
    state: "Texas",
    traveldist: "200 miles",
    phone: "1-210-987-3489",
    paypaluser:"homers",
    skills: ["moving assistance","house painting","drywall"],
    reviews: [],
    photourl: "https://randomuser.me/api/portraits/men/5.jpg",
    bio:"Your shields were failing, sir. Not if I weaken first. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });