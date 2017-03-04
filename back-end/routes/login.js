'use strict';

let express = require('express');
let path = require('path');
let router = express.Router();

let user = require('../controllers/user');

router.get('/', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, '../../front-end/login/login.html'));
});

router.post('/', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    user.authentication(username, password)
        .then(result => res.sendStatus(result ? 200 : 403),
            error => next(error));
});

module.exports = router;
