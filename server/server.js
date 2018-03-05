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

var db = new DB.DB(db_host, db_user, db_password, db_database);

var app = express();
app.use(bodyParser.json());
app.use(cors());

var server = app.listen(8000, function () {
    console.log('Server listening on port 8000');
});

app.get("/api/league/:league_id/schedule/:week", function (req, res) {
    var league_id = req.params.league_id;
    var week = req.params.week;
    db.getLeagueSchedule(league_id, week).then(function (result) {
        res.send(result);
    });
});

app.get("/api/league/:league_id/schedule", function (req, res) {
    var league_id = req.params.league_id;
    db.getLeagueSchedule(league_id, null).then(function (result) {
        res.send(result);
    });
});

app.get("/api/league/:league_id/rosters/:user_id", function (req, res) {
    var league_id = req.params.league_id;
    var user_id = req.params.user_id;
    db.getRoster(league_id, user_id).then(function (result) {
        res.send(result);
    });
});

app.get("/api/league/:league_id/rosters", function (req, res) {
    var league_id = req.params.league_id;
    db.getLeagueRosters(league_id).then(function (result) {
        res.send(result);
    });
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

app.get("/api/user/authenticate", function (req, res) {
    var email = req.query.email;
    console.log(req.query);
    db.getUserLoginInfo(email).then(function (result) {
        if (result.length > 0 && req.query.password === result[0].Password) {
            user_id = result[0].ID;
            db.getUserInfo(user_id).then(function (result2) {
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    _id: user_id,
                    email: email,
                    userName: result2[0].Username,
                    firstName: result2[0].FirstName,
                    lastName: result2[0].LastName
                });
            });
        }
        else {
            res.status(500).json('Email or Password is Incorrect');
        }
    });
});

app.get("/api/user/:user_id", function (req, res) {
    var user_id = req.params.user_id;
    db.getUserInfo(user_id).then(function (result) {
        res.send(result);
    });
});
