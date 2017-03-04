'use strict';

let router = require('express').Router();
let path = require('path');

let user = require('../controllers/user');

router.get('/', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, '../../front-end/sign-up/sign-up.html'));
});

router.post('/', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    user.save(username, password)
        .then(result => res.sendStatus(result ? 200 : 304),
            error => next(error));
});

router.post('/get', function (req, res, next) {
    user.get()
        .then(user => res.send(JSON.stringify(user)),
            error => next(error));
});

module.exports = router;

