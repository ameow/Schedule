let mongoose = require('../models/mongoose');

let curriculum = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    course: {
        type: Number,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
});

module.exports = curriculum;
