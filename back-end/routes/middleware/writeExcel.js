let fs = require('fs');
let xlsx = require('node-xlsx');

module.exports = (req, res, next) => {
    let file = req.body.fileName;
    let data = req.body.excelData;
    let name = req.body.sheetName;
    console.log(data);
    let buffer = xlsx.build([{name: name, data: data}]);

    fs.writeFile(file + '.xls', buffer, err => {
        next(err);
    });
};
