let mongoose = require('./mongoose');
let userSchema = require('../schemas/user');

let userModel = mongoose.model('User',  userSchema);
let model = {
    get:  function (username) {
        return userModel.findOne({username: username});
    },

    hashPassword: function () {
        return userModel.encryptPassword()
    }

};

module.exports = model;
