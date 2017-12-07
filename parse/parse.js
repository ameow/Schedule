"use strict";

let fs = require('fs');
let node_xlsx = require('node-xlsx');

let RoomDB = require('./db/roomDB');
let TypeDB = require('./db/typeDB');
let SubjectDB = require('./db/subjectDB');
let CourseDB = require('./db/courseDB');
let DayDB = require('./db/dayDB');

fs.readFile(__dirname + '/1_course.xlsx', function (err, data) {
    if (err) {
        console.log(err);
        return;
    }

    let info = node_xlsx.parse(data)[0].data;
    let schedule = {
        age: '2016 - 2017',
        days: []
    };

    let DAYS = {
        MONDAY: 9,
        TUESDAY: 32,
        WEDNESDAY: 57,
        THURSDAY: 78,
        FRIDAY: 99,
        SATURDAY: 120
    };

    let FIRST = {
        START: 2,
        GROUPS: 4,
        LECTURE: 8
    };

    let SECOND = {
        START: 11,
        GROUPS: 4,
        LECTURE: 17
    };

    let THIRD = {
        START: 20,
        GROUPS: 3,
        LECTURE: 24
    };

    let FOURTH = {
        START: 27,
        GROUPS: 2,
        LECTURE: 29
    };

    for (let dayName in DAYS) {
        let day = {};
        day = parse(info, DAYS[dayName], FIRST.START, 4, FIRST.GROUPS, FIRST.LECTURE, 8);
        addDay(schedule, day);
        day = parse(info, DAYS[dayName], SECOND.START, 4, SECOND.GROUPS, SECOND.LECTURE, 8);
        addDay(schedule, day);
        day = parse(info, DAYS[dayName], THIRD.START, 4, THIRD.GROUPS, THIRD.LECTURE, 8);
        addDay(schedule, day);
        day = parse(info, DAYS[dayName], FOURTH.START, 4, FOURTH.GROUPS, FOURTH.LECTURE, 8);
        addDay(schedule, day);
    }

    let str = JSON.stringify(schedule, null, 4);
    fs.writeFile('result.txt', str, (err) => {
        if (err) {
            console.log("Write file error!");
            return;
        }
        console.log('The file "result.txt" has been saved!');
    });
});

function parse(info, START_X, START_Y, CLASSES_COUNT, GROUPS_COUNT, LECTURE_AUDITORY, GROUP_X) {
    let day = {};
    day.name = info[START_X][0];
    DayDB.insert(day.name);
    day.classes = [];
    for (let classesCount = 0; classesCount < CLASSES_COUNT; classesCount++) {
        let classes = START_X + classesCount * 4;
        let tmp = {};
        tmp.time = info[classes][1];
        tmp.groups = [];
        let lecture = true;
        for (let i = START_Y + 1; i < START_Y + GROUPS_COUNT * 2; i++) {
            if (info[classes][i] !== undefined) {
                lecture = false;
            }
        }
        for (let groupsCount = 0; groupsCount < GROUPS_COUNT; groupsCount++) {
            let groups = START_Y + groupsCount * 2;
            if (lecture) {
                let group = getGroup(parseInt(info[GROUP_X][groups]), parseInt(info[4][0]),
                    info[classes][START_Y], info[classes + 2][START_Y], '0', info[classes + 3][LECTURE_AUDITORY]);
                tmp.groups.push(group);
            } else {
                if (info[classes][groups] === undefined) {
                    if (info[classes][groups + 1] !== undefined) {
                        let group = getGroup(parseInt(info[GROUP_X][groups]), parseInt(info[4][0]),
                            info[classes][groups + 1], info[classes + 1][groups + 1], '2.2',
                            info[classes + 3][groups + 1]);
                        tmp.groups.push(group);
                    }
                    continue;
                }
                if (info[classes + 1][groups + 1] === undefined) {
                    let group = getGroup(parseInt(info[GROUP_X][groups]), parseInt(info[4][0]),
                        info[classes][groups], info[classes + 1][groups], '1',
                        info[classes + 3][groups]);
                    tmp.groups.push(group);
                } else {
                    if (info[classes + 1][groups] !== undefined) {
                        let group = getGroup(parseInt(info[GROUP_X][groups]), parseInt(info[4][0]),
                            info[classes][groups], info[classes + 1][groups], '2.1',
                            info[classes + 3][groups]);
                        tmp.groups.push(group);
                    }
                    if (info[classes][groups + 1] === undefined) {
                        let group = getGroup(parseInt(info[GROUP_X][groups]), parseInt(info[4][0]),
                            info[classes][groups], info[classes + 1][groups + 1], '2.2',
                            info[classes + 3][groups + 1]);
                        tmp.groups.push(group);
                    } else {
                        let group = getGroup(parseInt(info[GROUP_X][groups]), parseInt(info[4][0]),
                            info[classes][groups + 1], info[classes + 1][groups + 1], '2.2',
                            info[classes + 3][groups + 1]);
                        tmp.groups.push(group);
                    }
                }
            }
        }
        day.classes.push(tmp);
    }
    return day;

    function getGroup() {
        if (arguments.length !== 6) {
            console.log('Error: ', arguments);
        }
        let group = {};
        group.number = arguments[0];
        group.course = arguments[1];
        CourseDB.insert(group.course);
        group.subject = arguments[2].trim();
        SubjectDB.insert(group.subject);
        group.professor = arguments[3];
        group.type = arguments[4];
        TypeDB.insert(group.type);
        group.class = arguments[5];
        RoomDB.insert({
            number: group.class,
            type: group.type,
        });
        return group;
    }
}

function addDay(schedule, day) {
    if (schedule.days.length === 0) {
        schedule.days.push(day);
        return;
    }

    let flag = true;
    schedule.days.forEach((dayItem) => {
        if (dayItem.name === day.name) {
            for (let i = 0; i < day.classes.length; i++) {
                let newClassItem = day.classes[i];
                dayItem.classes.forEach((classItem) => {
                    if (newClassItem.time === classItem.time) {
                        pushGroups(classItem.groups, newClassItem.groups);
                        day.classes.splice(day.classes.indexOf(newClassItem), 1);
                        i--;
                    }
                });
            }
            if (day.classes.length !== 0) {
                day.classes.forEach((newClass) => {
                    dayItem.classes.push(newClass);
                })
            }
            flag = false;
        }
    });

    if (flag) {
        schedule.days.push(day);
    }

    function pushGroups(groups, newGroups) {
        newGroups.forEach((group) => {
            groups.push(group);
        })

    }
}