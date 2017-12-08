let DB = require('./db');

const insertSQL = 'INSERT INTO lecturer (name) VALUES (?)';

module.exports = class LecturerDB extends DB {

    static insert(name) {
        let request = {
            sql: insertSQL,
            array: [name],
        };

        return this.performRequest(request);
    }
};