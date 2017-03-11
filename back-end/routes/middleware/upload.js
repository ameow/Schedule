let multer = require('multer');

module.exports = multer({
    dest: './uploads/',
    limits: {
        fieldNameSize: 50,
        files: 1,
        fields: 5,
        fileSize: 1024 * 1024
    },
    fileFilter: function (req, file, callback) {
        if(file.mimetype !== 'application/vnd.ms-excel'){
            let error = new Error('Unsupported Media Type');
            error.status = 415;
            callback(error);
        } else {
            callback(null, true);
        }
    }
});