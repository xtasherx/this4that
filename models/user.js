const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  // add regex
  email: { type: String, required: true },
  city: { type: String, required: false },
  state: { type: String, required: false },
  traveldist: { type: String, required: false },
  // add regex 
  phone: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;