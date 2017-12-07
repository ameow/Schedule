let DB = require('./db');

const insertSQL = 'INSERT INTO course (number) VALUES (?)';

module.exports = class CourseDB extends DB {

    static insert(number) {
        let request = {
            sql: insertSQL,
            array: [number],
        };

        return this.performRequest(request);
    }
};