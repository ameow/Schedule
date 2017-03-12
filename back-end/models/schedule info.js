let mongoose = require('./mongoose');
let schedule = require('../schemas/schedule info');

module.exports = mongoose.model('ScheduleInfo',  schedule);