let mongoose = require('../../models/mongoose');

let groups = new mongoose.Schema({
    course: {
        type: Number,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    professor: {
        type: String
    },
    class: {
        type: String
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = groups;
