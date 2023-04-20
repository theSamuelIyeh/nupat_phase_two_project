const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
})

module.exports = mongoose.Model(userSchema, 'User');