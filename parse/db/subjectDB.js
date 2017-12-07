let DB = require('./db');

const insertSQL = 'INSERT INTO subject (name) VALUES (?)';

module.exports = class SubjectDB extends DB {

    static insert(name) {
        let request = {
            sql: insertSQL,
            array: [name],
        };

        return this.performRequest(request);
    }
};