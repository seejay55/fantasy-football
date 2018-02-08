"use strict";
exports.__esModule = true;
var mysql = require("mysql");
var DB = /** @class */ (function () {
    function DB(address, user, pass) {
        this.pool = mysql.createPool({
            host: address,
            user: user,
            password: pass,
            connectionLimit: 10,
            database: 'fantasyfootball18'
        });
    }
    DB.prototype.query = function (statement, callback) {
        this.pool.getConnection(function (conError, con) {
            if (conError) {
                console.log('DB Error(Conn):\n' + conError);
            }
            else {
                con.query(statement, callback).on('end', function () {
                    con.release();
                });
            }
        });
    };
    return DB;
}());
exports.DB = DB;
