"use strict";
exports.__esModule = true;
var mysql = require("mysql");
var DB = /** @class */ (function () {
    function DB(address, user, pass, database) {
        this.pool = mysql.createPool({
            host: address,
            user: user,
            password: pass,
            connectionLimit: 100,
            database: database
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
        var statement = mysql.format('SELECT * FROM leagues WHERE id = ?', [leagueID]);
        return this.query(statement);
    };
    DB.prototype.getLeagueMembers = function (leagueID) {
        var statement = mysql.format("SELECT Username, team_name, commisioner\n            FROM league_members\n            JOIN userinfo ON user_id = userinfo.ID\n            WHERE league_id = ?;", [leagueID]);
        return this.query(statement);
    };
    DB.prototype.getLeagueSchedule = function (leagueID, week) {
        var params = [leagueID];
        if (week) {
            params.push(week);
        }
        var statement = mysql.format("SELECT week, player1_id, player2_id\n            FROM league_schedule\n            WHERE league_id = ?\n            AND week" + (week ? ' = ?' : '') + ';', params);
        return this.query(statement);
    };
    DB.prototype.getLeagueRosters = function (leagueID) {
        var statement = mysql.format("SELECT player_name, player_pos, team_abbr\n            FROM league_rosters\n            JOIN nfl_players ON league_rosters.player_id = nfl_players.player_id\n            WHERE league_id = ?;", [leagueID]);
        return this.query(statement);
    };
    DB.prototype.getRoster = function (leagueID, userID) {
        var statement = mysql.format("SELECT player_name, player_pos, team_abbr\n            FROM league_rosters\n            JOIN nfl_players ON league_rosters.player_id = nfl_players.player_id\n            WHERE league_id = ?\n            AND user_id = ?;", [leagueID, userID]);
        return this.query(statement);
    };
    DB.prototype.getUserInfo = function (userID) {
        var statement = mysql.format('SELECT * FROM userinfo WHERE id = ?', [userID]);
        return this.query(statement);
    };
    DB.prototype.getUserRecord = function (userID, leagueID) {
        var statement = mysql.format("SELECT\n            COUNT(IF((player1_id = ? AND player1_score > player2_score)\n                OR (player2_id = ? AND player2_score > player1_score),1,NULL)) AS wins,\n            COUNT(IF((player1_id = ? AND player1_score < player2_score)\n                OR (player2_id = ? AND player2_score < player1_score),1,NULL)) AS losses,\n            COUNT(IF((player1_id = ? AND player1_score = player2_score)\n                OR (player2_id = ? AND player2_score = player1_score),1,NULL)) AS ties\n            FROM league_schedule\n            JOIN (\n                SELECT league_id, user_id, year, week, SUM(week_pts) AS player1_score\n                FROM league_rosters\n                JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id\n                GROUP BY league_id, user_id, year, week\n            ) AS p1_scores\n            ON (p1_scores.user_id = league_schedule.player1_id)\n                AND (p1_scores.week = league_schedule.week)\n            JOIN (\n                SELECT league_id, user_id, year, week, SUM(week_pts) AS player2_score\n                FROM league_rosters\n                JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id\n                GROUP BY league_id, user_id, year, week\n            ) AS p2_scores\n            ON (p2_scores.user_id = league_schedule.player2_id)\n                AND (p2_scores.week = league_schedule.week)\n            WHERE (player1_id = ? OR player2_id = ?)\n            AND league_schedule.league_id = ?;", [userID, userID, userID, userID, userID, userID, userID, userID, leagueID]);
        return this.query(statement);
    };
    DB.prototype.getUserScore = function (userID, leagueID, week) {
        var params = [userID, leagueID];
        if (week) {
            params.push(week);
        }
        params.push(leagueID);
        var statement = mysql.format("SELECT SUM(week_pts) AS score\n            FROM league_rosters\n            JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id\n            WHERE user_id = ?\n                AND league_id = ?\n                AND week " + (week ? '= ?' : '') + "\n                AND year = (SELECT year FROM leagues WHERE id = ?)\n            GROUP BY league_id, user_id, year, week;", params);
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
