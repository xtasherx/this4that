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
    id: 1,
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
    date: new Date(Date.now())
  },
  {
    id: 2,
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
    date: new Date(Date.now())
  },
  {
    id: 3,
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
    date: new Date(Date.now())
  },
  {
    id: 4,
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
    date: new Date(Date.now())
  },
  {
    id: 5,
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
    date: new Date(Date.now())
  },
  {
    id: 6,
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
    date: new Date(Date.now())
  },
  {
    id: 7,
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
    date: new Date(Date.now())
  },
  {
    id: 8,
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
    date: new Date(Date.now())
  },
  {
    id: 9,
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
    date: new Date(Date.now())
  },
  {
    id: 10,
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