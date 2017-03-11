'use strict';

let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    SessionStore = require('connect-mongo')(session),
    checkAuthentication = require('./routes/middleware/checkAuthentication'),
    upload = require('./routes/middleware/upload');

let login = require('./routes/login');
let signUp = require('./routes/sign-up');

let app = express();
app.set('port', 1488);

app.set('views', path.join(__dirname, '../front-end/error'));
app.set('view engine', 'jade');

app.use(express.static(path.resolve(__dirname, '../front-end/')));
app.use('/bower_components', express.static(path.resolve(__dirname, '../bower_components')));

app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
        secret: 'ThisIsScheduleCreator',
        key: 'sid',
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: null
        },
        store: new SessionStore({mongooseConnection: mongoose.connection})
    }
));

app.use('/login', login);
app.use('/sign-up', signUp);

app.use('/main', checkAuthentication, function(req, res, next){
    req.session.numberOfVisits = req.session.numberOfVisits + 1 || 1;
    res.send('Visits: ' + req.session.numberOfVisits);
});

app.post('/file', upload.single('file'),  function (req, res, next) {
    console.log('req body: ', req.body);
    console.log('req file: ', req.file);
    res.sendStatus(202);
});

app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    console.log(err.message + '    ' + err.status);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
    res.end();
});


app.listen(1488, function () {
    console.log('Server listening on port 1488!');
});

module.exports = app;
