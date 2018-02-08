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
        res.send(results);
    });
});

app.get("/api/user/:user_id", function (req, res) {
    const statement = mysql.format(
        'SELECT * FROM userinfo WHERE id = ?',
        [req.params.user_id]
    );
    db.query(statement, function(error, results, fields) {
        if (error) {
            console.log('DB Error(Query):\n' + error);
        }
        if (error) {
            throw error;
        }
        var results = JSON.parse(JSON.stringify(results))
        res.send(results);
    });
});

app.get("/api/records/league=:league_id&user=:user_id", function (req, res) {
    const statement = mysql.format(
        `SELECT
        COUNT(IF((player1_id = ? AND player1_score > player2_score)
            OR (player2_id = ? AND player2_score > player1_score),1,NULL)) AS wins,
        COUNT(IF((player1_id = ? AND player1_score < player2_score)
            OR (player2_id = ? AND player2_score < player1_score),1,NULL)) AS losses,
        COUNT(IF((player1_id = ? AND player1_score = player2_score)
            OR (player2_id = ? AND player2_score = player1_score),1,NULL)) AS ties
        FROM league_schedule
        JOIN (
            SELECT league_id, user_id, year, week, SUM(week_pts) AS player1_score
            FROM league_rosters
            JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id
            GROUP BY league_id, user_id, year, week
        ) AS p1_scores
        ON (p1_scores.user_id = league_schedule.player1_id)
            AND (p1_scores.week = league_schedule.week)
        JOIN (
            SELECT league_id, user_id, year, week, SUM(week_pts) AS player2_score
            FROM league_rosters
            JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id
            GROUP BY league_id, user_id, year, week
        ) AS p2_scores
        ON (p2_scores.user_id = league_schedule.player2_id)
            AND (p2_scores.week = league_schedule.week)
        WHERE (player1_id = ? OR player2_id = ?)
        AND league_schedule.league_id = ?;`,
        [req.params.user_id, req.params.user_id, req.params.user_id,
        req.params.user_id, req.params.user_id, req.params.user_id,
        req.params.user_id, req.params.user_id, req.params.league_id]
    );
    db.query(statement, function(error, results, fields) {
        if (error) {
            console.log('DB Error(Query):\n' + error);
        }
        if (error) {
            throw error;
        }
        var results = JSON.parse(JSON.stringify(results))
        res.send(results);
    });
});

app.get("/api/scores/league=:league_id&user=:user_id", function (req, res) {
    const statement = mysql.format(
        `SELECT week, SUM(week_pts) AS score
        FROM league_rosters
        JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id
        WHERE user_id = ? AND league_id = ? AND year = 2016
        GROUP BY league_id, user_id, year, week;`,
        [req.params.user_id, req.params.league_id]
    );
    db.query(statement, function(error, results, fields) {
        if (error) {
            console.log('DB Error(Query):\n' + error);
        }
        if (error) {
            throw error;
        }
        var results = JSON.parse(JSON.stringify(results))
        res.send(results);
    });
});

app.get("/api/scores/league=:league_id&user=:user_id&week=:week", function (req, res) {
    const statement = mysql.format(
        `SELECT SUM(week_pts) AS score
        FROM league_rosters
        JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id
        WHERE user_id = ? AND league_id = ? AND week = ? AND year = 2017
        GROUP BY league_id, user_id, year, week;`,
        [req.params.user_id, req.params.league_id, req.params.week]
    );
    db.query(statement, function(error, results, fields) {
        if (error) {
            console.log('DB Error(Query):\n' + error);
        }
        if (error) {
            throw error;
        }
        var results = JSON.parse(JSON.stringify(results))
        res.send(results);
    });
});

