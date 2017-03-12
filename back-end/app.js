'use strict';

let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    SessionStore = require('connect-mongo')(session),
    checkAuthentication = require('./routes/middleware/checkAuthentication');

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

app.use('/login', login);
app.use('/sign-up', signUp);

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

app.use('/main', checkAuthentication, function(req, res, next){
    req.session.numberOfVisits = req.session.numberOfVisits + 1 || 1;
    res.send('Visits: ' + req.session.numberOfVisits);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    //console.log(err);
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
