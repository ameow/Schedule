let DB = require('./db');

const insertSQL = 'INSERT INTO day (name) VALUES (?)';

module.exports = class DayDB extends DB {

    static insert(name) {
        let request = {
            sql: insertSQL,
            array: [name],
        };

        return this.performRequest(request);
    }
};