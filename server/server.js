var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
var config = require('../config/config');
var DB = require('./database')

var db_host = config.db_HOST;
var db_user = config.db_USER;
var db_password = config.db_PASSWORD;
var db_database = config.db_DATABASE;

var db = new DB.DB(db_host, db_user, db_password);

var app = express();
app.use(bodyParser.json());
app.use(cors());

var server = app.listen(8000, function () {
    console.log('Server listening on port 8000');
});

app.get("/api/league/:league_id", function (req, res) {
    const statement = mysql.format(
        'SELECT * FROM leagues WHERE id = ?',
        [req.params.league_id]
    );
    db.query(statement, function(error, results, fields) {
        if (error) {
            console.log('DB Error(Query):\n' + error);
        }
        if (error) {
            throw error;
        }
        var results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.send(results);
    });
});

app.get("/api/league/:league_id/members", function (req, res) {
    const statement = mysql.format(
        `SELECT user_id, team_name, commisioner, team_logo
        FROM league_members
        WHERE league_id = ?`,
        [req.params.league_id]
    );
    db.query(statement, function(error, results, fields) {
        if (error) {
            console.log('DB Error(Query):\n' + error);
        }
        if (error) {
            throw error;
        }
        var results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.send(results);
    });
});
