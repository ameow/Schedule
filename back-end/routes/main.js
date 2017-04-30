'use strict';

let express = require('express');
let path = require('path');
let router = express.Router();

let upload = require('./middleware/upload'),
    readExcel = require('./middleware/readExcel'),
    writeExcel = require('./middleware/writeExcel'),
    controllerFactory = require('../factory/controllers');

router.post('/save', upload.single('file'), readExcel, function (req, res, next) {
    let type = req.body.type;
    let name = req.body.name;
    let xlsx = req.xlsx;

    let controller = controllerFactory.create(type);
    controller.save(name, xlsx)
        .then(
            result => result ? res.sendStatus(200) : res.sendStatus(500),
            error => next(error)
        );
});

router.post('/get_excel',
    (req, res, next) => {
        console.log(req.body);
        let type = req.body.type;
        let name = req.body.name;

        let controller = controllerFactory.create(type);

        controller.prepareInfo(name)
            .then(
                groups => {
                    req.body.excelData = groups;
                    req.body.fileName = type;
                    req.body.sheetName = 'Sheet1';
                    next();
                },
                error => next(error));
    },
    writeExcel,
    (req, res, next) => {
        res.sendStatus(200);
    });


module.exports = router;
