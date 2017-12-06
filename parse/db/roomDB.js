let DB = require('db');

const insertSQL = 'INSERT INTO room (number, type_id) VALUES (?, SELECT id FROM type WHERE name=?)';

module.exports = class RoomDB extends DB {

    static insert(info) {
        let request = {
            sql: insertSQL,
            array: [info.number, info.type],
        };

        return this.performRequest(request);
    }
};
