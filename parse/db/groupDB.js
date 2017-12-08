let DB = require('./db');

const insertSQL = 'INSERT INTO schedule.group (course_id, speciality_id, number, students) VALUES ( ' +
  '(SELECT id FROM course WHERE course.number = ?), ' +
  '(SELECT id FROM speciality WHERE speciality.name = ?), ' +
  '?, ?)';

module.exports = class GroupDB extends DB {

    static insert(info) {
        let request = {
            sql: insertSQL,
            array: [info.course, info.speciality, info.number, info.students],
        };

        return this.performRequest(request);
    }
};

