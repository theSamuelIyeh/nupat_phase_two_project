const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("User", userSchema);


