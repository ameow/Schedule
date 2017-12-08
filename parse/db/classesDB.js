let DB = require('./db');

const insertSQL = 'INSERT INTO schedule.classes ' +
  '(day_id, time_id, group_id, lecturer_id, room_id, subject_id, type_id) ' +
  'VALUES (' +
    '(SELECT id FROM schedule.day WHERE name = ?), ' +
    '(SELECT id FROM schedule.time WHERE start = ? AND end = ?), ' +
    '(SELECT id FROM schedule.group WHERE number = ? ' +
        'AND course_id = (SELECT id FROM schedule.course WHERE number = ?) ' +
        'AND speciality_id = (SELECT id FROM schedule.speciality WHERE name = ?)), ' +
    '(SELECT id FROM schedule.lecturer WHERE lecturer.name = ?), ' +
    '(SELECT id FROM schedule.room WHERE room.number = ?), ' +
    '(SELECT id FROM schedule.subject WHERE subject.name = ?), ' +
    '(SELECT id FROM schedule.type WHERE name = ?) ' +
  ');';

module.exports = class ClassesDB extends DB {

    static insert(info) {
        console.log(info.lecturer, info.name);
        let request = {
            sql: insertSQL,
            array: [info.day, info.startTime, info.endTime, info.group, info.course, info.speciality,
                info.lecturer, info.room, info.subject, info.type],
        };



        return this.performRequest(request);
    }
};

