let group = require('../controllers/group');

module.exports.create = function (type) {
    switch(type){
        case 'group':
            return group;
    }
};