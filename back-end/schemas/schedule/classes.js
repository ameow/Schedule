let mongoose = require('../../models/mongoose');
let groups = require('./groups');

let classes = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    groups: [groups]
});

module.exports = classes;
