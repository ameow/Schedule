let mongoose = require('../../models/mongoose');

let lecturer = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    course: {
        type: Number,
        required: true
    },
    group: {
        type: Number,
        required: true
    },
    hours: {
        type: Number,
        required: true
    }
});

module.exports = lecturer;
