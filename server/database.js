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
    DB.prototype.query = function (statement) {
        var _this = this;
        var queryResult;
        return new Promise(function (resolve, reject) {
            _this.pool.getConnection(function (conError, con) {
                if (conError) {
                    reject('DB Error(Conn):\n' + conError);
                }
                con.query(statement, function (error, result) {
                    if (error) {
                        reject('DB Error(Query):\n' + error);
                    }
                    queryResult = JSON.parse(JSON.stringify(result));
                    resolve(queryResult);
                }).on('end', function () {
                    con.release();
                });
            });
        });
    };
    DB.prototype.getLeagueInfo = function (leagueID) {
        var statement = mysql.format('SELECT * FROM ?? WHERE ?? = ?', ['leagues', 'id', leagueID]);
        return this.query(statement);
    };
    DB.prototype.getLeagueMembers = function (leagueID) {
        var statement = mysql.format('SELECT * FROM ?? WHERE ?? = ?', ['league_members', 'league_id', leagueID]);
        return this.query(statement);
    };
    DB.prototype.getUserInfo = function (userID) {
        var statement = mysql.format('SELECT * FROM ?? WHERE ?? = ?', ['userinfo', 'id', userID]);
        return this.query(statement);
    };
    DB.prototype.getUserRecord = function (userID, leagueID) {
        var statement = mysql.format("SELECT\n            COUNT(IF((player1_id = ? AND player1_score > player2_score)\n                OR (player2_id = ? AND player2_score > player1_score),1,NULL)) AS wins,\n            COUNT(IF((player1_id = ? AND player1_score < player2_score)\n                OR (player2_id = ? AND player2_score < player1_score),1,NULL)) AS losses,\n            COUNT(IF((player1_id = ? AND player1_score = player2_score)\n                OR (player2_id = ? AND player2_score = player1_score),1,NULL)) AS ties\n            FROM league_schedule\n            JOIN (\n                SELECT league_id, user_id, year, week, SUM(week_pts) AS player1_score\n                FROM league_rosters\n                JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id\n                GROUP BY league_id, user_id, year, week\n            ) AS p1_scores\n            ON (p1_scores.user_id = league_schedule.player1_id)\n                AND (p1_scores.week = league_schedule.week)\n            JOIN (\n                SELECT league_id, user_id, year, week, SUM(week_pts) AS player2_score\n                FROM league_rosters\n                JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id\n                GROUP BY league_id, user_id, year, week\n            ) AS p2_scores\n            ON (p2_scores.user_id = league_schedule.player2_id)\n                AND (p2_scores.week = league_schedule.week)\n            WHERE (player1_id = ? OR player2_id = ?)\n            AND league_schedule.league_id = ?;", [userID, userID, userID, userID, userID, userID, userID, userID, leagueID]);
        var result = this.query(statement);
        return result;
    };
    DB.prototype.getUserScore = function (userID, leagueID, week) {
        var statement = mysql.format("SELECT SUM(week_pts) AS score\n            FROM league_rosters\n            JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id\n            WHERE user_id = ? AND league_id = ? AND week = ? \n            GROUP BY league_id, user_id, year, week;", [userID, leagueID, week]);
        return this.query(statement);
    };
    DB.prototype.getUserRoster = function (userID, leagueID) {
        var statement = mysql.format("SELECT player_name, player_pos, team_abbr\n            FROM league_rosters\n            JOIN nfl_players ON league_rosters.player_id = nfl_players.player_id\n            WHERE user_id = ? AND league_id = ?;", [userID, leagueID]);
        return this.query(statement);
    };
    DB.prototype.getUserSchedule = function (userID, leagueID) {
        var statement = mysql.format("SELECT week, player1_id, player2_id\n            FROM league_schedule\n            WHERE (player1_id = 1 OR player2_id = 1) AND league_id = 1;", [userID, userID, leagueID]);
        return this.query(statement);
    };
    DB.prototype.getUsername = function (userID) {
        var statement = mysql.format("SELECT Username FROM userinfo WHERE ID = ?", [userID]);
        return this.query(statement)['Username'];
    };
    DB.prototype.getPlayerInfo = function (playerID) {
        var statement = mysql.format("SELECT player_name, player_pos, team_abbr\n            FROM nfl_players\n            WHERE player_id = ?;", [playerID]);
        return this.query(statement);
    };
    DB.prototype.getPlayerStats = function (playerID, year, week) {
        var statement = mysql.format("SELECT *\n            FROM nfl_stats\n            WHERE player_id = ?\n            AND year = ?\n            AND week = ?;", [playerID, year, week]);
        return this.query(statement);
    };
    return DB;
}());
exports.DB = DB;
