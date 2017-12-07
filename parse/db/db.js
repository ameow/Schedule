let mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'school11',
    database: 'schedule',
});

module.exports = class DB{

    static getConnection(){
        return new Promise((resolve, reject) => {
            pool.getConnection(function (error, connection) {
                error ? reject(error) : resolve(connection);
            });
        })
    }

    static performRequest(request) {
        return new Promise((resolve, reject) => {
            this.getConnection()
                .then(connection => {
                    connection.query(request.sql, request.array, function (error, result) {
                        connection.release();
                        error ? reject(error) : resolve(result);
                    });
                })
                .catch(error => reject(error));
        });
    }
};