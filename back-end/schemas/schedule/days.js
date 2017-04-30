let mongoose = require('../../models/mongoose');
let classes = require('./classes');

let days = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    classes: [classes]
});

module.exports = days;
