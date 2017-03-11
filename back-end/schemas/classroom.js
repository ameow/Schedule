let mongoose = require('../models/mongoose');

let classroom = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = classroom;
