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

/**
 * Users
 */
app.get("/api/users", function (req, res) {
    db.getAllUsers().then(function (result) {
        res.send(result);
    });
});

app.post("/api/users", function (req, res) {
    var email = req.body.Email;
    var password = req.body.Password;
    var username = req.body.Username;
    db.createUser(email, password, username).then(function (result) {
        res.status(204);
    });
});

app.get("/api/user/authenticate", function (req, res) {
    var email = req.headers.email;
    db.getUserLoginInfo(email).then(function (result) {
        if (req.headers.password === result[0].Password) {
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
            res.status(500).json({error: 'Email or Password is Incorrect'});
        }
    });
});

app.get("/api/user/:user_id", function (req, res) {
    var user_id = req.params.user_id;
    db.getUserInfo(user_id).then(function (result) {
        res.send(result);
    });
});

app.patch("/api/user/:user_id", function (req, res) {
    var id = req.params.user_id;
    var username = req.body.Username;
    var profilePic = req.body.ProfilePic;
    db.updateUser(id, username, password).then(function (result) {
        res.status(204);
    });
});

app.delete("/api/user/:user_id", function (req, res) {
    var id = req.params.user_id;
    db.deleteUser(id).then(function (result) {
        res.status(204);
    });
});

/**
 * Leagues
 */
app.get("/api/leagues", function (req, res) {
    db.getAllLeagues().then(function (result) {
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    });
});

app.get("/api/league/:league_id/members", function (req, res) {
    var league_id = req.params.league_id;
    db.getLeagueMembers(league_id).then(function (result) {
        res.send(result);
    });
});

app.get("/api/league/:league_id/rosters", function (req, res) {
    var league_id = req.params.league_id;
    db.getLeagueRosters(league_id).then(function (result) {
        res.send(result);
    });
});

app.get("/api/league/:league_id/roster/:user_id", function (req, res) {
    var league_id = req.params.league_id;
    var user_id = req.params.user_id;
    db.getRoster(league_id, user_id).then(function (result) {
        res.send(result);
    });
});

app.get("/api/league/:league_id/schedule", function (req, res) {
    var league_id = req.params.league_id;
    var week = null;
    if (req.query.week != undefined) {
        week = req.query.week;
    }
    db.getLeagueSchedule(league_id, week).then(function (result) {
        res.send(result);
    });
});

app.get("/api/league/:league_id/record/:user_id", function (req, res) {
    var league_id = req.params.league_id;
    var user_id = req.params.user_id;
    db.getUserRecord(user_id, league_id).then(function (result) {
        res.send(result);
    });
});

app.post("/api/users", function (req, res) {
    var email = req.body.Email;
    var password = req.body.Password;
    var username = req.body.Username;
    db.createUser(email, password, username).then(function (result) {
        res.status(204);
    });
});

// Tests

app.get("/api/userLeagues/:sender_id/:searchParams", function(req, res) {
    var senderID = req.params.sender_id;
    var search = req.params.searchParams;
    db.searchUserResults(senderID, search).then(function(result) {
       res.send(result);
    });
});
app.get("/api/league/:league_id", function (req, res) {
    var league_id = req.params.league_id;
    db.getLeagueInfo(league_id).then(function (result) {
        res.send(result);
    });
});

app.get("/api/league/:league_id/scores", function (req, res) {
    var league_id = req.params.league_id;
    var user_id = null;
    var week = null;
    if (req.query.user != undefined) {
        user_id = req.query.user;
    }
    if (req.query.week != undefined) {
        week = req.query.week;
    }
    db.getUserScore(league_id, user_id, week).then(function (result) {
        res.send(result);
    });
});
