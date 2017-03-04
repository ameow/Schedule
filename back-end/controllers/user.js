'use strict';

let User = require('../models/user').User;

function authentication(username, password) {
    return User.findOne({username: username})
        .then(user => {
            return user ? user.checkPassword(password) : false;
        });
}

function save(username, password) {
    return User.findOne({username: username})
        .then(user => {
            if (user) return false;

            let newUser = new User({
                username: username,
                password: password
            });
            return newUser.save()
        });
}

module.exports.get = () => User.find();

module.exports.authentication = authentication;
module.exports.save = save;

