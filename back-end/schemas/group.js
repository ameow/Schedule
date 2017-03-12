let mongoose = require('../models/mongoose');

let group = new mongoose.Schema({
    course: {
        type: Number,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = group;
