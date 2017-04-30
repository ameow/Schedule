'use strict';

let user = require('../models/user');

function authentication(username, password) {
    return user.get(username)
        .then(user => {
            if(user){
                return user.checkPassword(password) ? user._id : null;
            }
            return null;
        });
}

function save(username, password) {
    return user.get(username)
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

