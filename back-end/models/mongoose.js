let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/schedule');
mongoose.Promise = global.Promise;

module.exports = mongoose;