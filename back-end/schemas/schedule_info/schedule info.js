let mongoose = require('../../models/mongoose');
let group = require('./group');
let lecturer = require('./lecturer');
let classroom = require('./classroom');
let curriculum = require('./curriculum');

let scheduleInfo = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    groups: [group],
    lecturers: [lecturer],
    classrooms: [classroom],
    curriculum: [curriculum]
});

module.exports = scheduleInfo;