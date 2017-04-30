'use strict';

let express = require('express');
let path = require('path');
let router = express.Router();

let user = require('../controllers/user');

router.get('/', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, '../../front-end/index.html'));
});

router.post('/', function (req, res, next) {
    let username = req.body.email;
    let password = req.body.password;

    user.authentication(username, password)
        .then(
            userId => {
                req.session.user = userId;
                res.sendStatus(userId ? 200 : 403);
            },
            error => next(error));
});


module.exports = router;
