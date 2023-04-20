const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Pls enter valid name'],
    unique: [true, 'Name already exist'],
  },
  gender: {
    type: String,
    required: [true, 'Pls enter valid gender'],
    lowercase: true,
  },
});

module.exports = mongoose.model("User", userSchema);


