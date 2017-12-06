let DB = require('db');

const insertSQL = 'INSERT INTO type (name) VALUES (?)';

module.exports = class TypeDB extends DB {

    static insert(name) {
        let request = {
            sql: insertSQL,
            array: [name],
        };

        return this.performRequest(request);
    }
}