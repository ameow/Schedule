let mongoose = require('./mongoose');
let userSchema = require('../schemas/user');

let user = mongoose.model('User',  userSchema);

// user.findByName = function (username) {
//     return user.findOne({username: username});
// };

module.exports = user;
