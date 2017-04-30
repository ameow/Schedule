let fs = require('fs');
let xlsx = require('node-xlsx');

module.exports = function (req, res, next) {
    fs.readFile(req.file.path, function (err, data) {
        if (err) next(err);
        else {
            req.xlsx = xlsx.parse(data);
            next();
        }
    });
};