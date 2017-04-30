"use strict";

let mongoose = require('./mongoose');
let scheduleSchema = require('../schemas/schedule_info/schedule info');

let ScheduleModel = mongoose.model('ScheduleInfo', scheduleSchema);

let model = {
    get: (name, what) => {
        return ScheduleModel.find({name: name}, what);
    }
};

module.exports = model;

