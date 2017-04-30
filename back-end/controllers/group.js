"use strict";

let GroupModel = require('../models/schedule info');

let groupController = {
    save: (name, xlsx) => {
        let groups = this._parseExcel(xlsx);

        return GroupModel.update(
            {name: name},
            {groups: groups},
            {upsert: true});
    },

    _parseExcel: xlsx => {
        let groups = [];
        xlsx[0].data.forEach((info, i, xlsx) => {
            if (i !== 0) {
                let obj = {};
                obj.course = info[0];
                obj.faculty = info[1];
                obj.number = info[2];
                obj.quantity = info[3];
                groups.push(obj);
            }
        });
        return groups;
    },

    prepareInfo: name => {
        let array = [];
        return GroupModel.get(name, {groups: 1})
            .then(
                groups => {
                    let result = [];
                    //console.log(groups);
                    delete groups._id;
                    console.log(groups[0]);
                    groups.forEach((info, i, groups) => {
                        console.log(info);
                        let array = [];
                        array[0] = info.course;
                        array[1] = info.faculty;
                        array[2] = info.number;
                        array[3] = info.quantity;
                        result.push(array);
                    });
                    return result;
                });
    }
};

module.exports = groupController;

