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
    var league_id = req.params.league_id;
    db.getLeagueInfo(league_id).then(function (result) {
        res.send(result);
    });
});

app.get("/api/league/:league_id/members", function (req, res) {
    var league_id = req.params.league_id;
    db.getLeagueMembers(league_id).then(function (result) {
        res.send(result);
    });
});

app.get("/api/user/:user_id", function (req, res) {
    var user_id = req.params.user_id;
    db.getUserInfo(user_id).then(function (result) {
        res.send(result);
    });
});

app.get("/api/league/:league_id/records/user/:user_id", function (req, res) {
    var league_id = req.params.league_id;
    var user_id = req.params.user_id;
    db.getUserRecord(user_id, league_id).then(function (result) {
        res.send(result);
    });
});

app.get("/api/scores/league=:league_id&user=:user_id&week=:week", function (req, res) {
    var league_id = req.params.league_id;
    var user_id = req.params.user_id;
    var week = req.params.week;
    db.getUserScore(user_id, league_id, week).then(function (result) {
        res.send(result);
    });
});

app.get("/api/scores/league=:league_id&user=:user_id", function (req, res) {
    var league_id = req.params.league_id;
    var user_id = req.params.user_id;
    db.getUserScore(user_id, league_id, null).then(function (result) {
        res.send(result);
    });
});

