const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/barteringapp"
);

const userSeed = [
  {
    firstname: "Neil",
    lastname: "deGrasse Tyson",
    email: "ntyson@haydenplanetarium.edu",
    city: "New York",
    state: "New York",
    traveldist: "100,000 lightyears",
    phone: "1-212-769-5100",
    paypaluser:"ntyson",
    skills: ["skill1","long-ass skill"],
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