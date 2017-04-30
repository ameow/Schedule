let mongoose = require('../../models/mongoose');
let days = require('./days');

let schedule = new mongoose.Schema({
    age: {
        type: String,
        required: true
    },
    days: [days]
});

module.exports = mongoose.model('Schedule', schedule);