"use strict";
exports.__esModule = true;
var mysql = require("mysql");
var DB = /** @class */ (function () {
    function DB(address, user, pass, database) {
        this.pool = mysql.createPool({
            host: address,
            user: user,
            password: pass,
            connectionLimit: 10,
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
        var statement = mysql.format("SELECT Username, TeamName, Commisioner\n            FROM league_members\n            JOIN userinfo ON UserID = userinfo.ID\n            WHERE LeagueID = ?;", [leagueID]);
        return this.query(statement);
    };
    DB.prototype.getLeagueSchedule = function (leagueID, week) {
        var params = [leagueID];
        if (week) {
            params.push(week);
        }
        var statement = mysql.format("SELECT Week, Player1ID, Player2ID\n            FROM league_schedule\n            WHERE LeagueID = ?\n            AND Week" + (week ? ' = ?' : '') + ';', params);
        return this.query(statement);
    };
    DB.prototype.getLeagueRosters = function (leagueID) {
        var statement = mysql.format("SELECT PlayerName, PlayerPos, TeamAbbr\n            FROM league_rosters\n            JOIN nfl_players ON league_rosters.PlayerID = nfl_players.player_id\n            WHERE LeagueID = ?;", [leagueID]);
        return this.query(statement);
    };
    DB.prototype.getRoster = function (leagueID, userID) {
        var statement = mysql.format("SELECT PlayerName, PlayerPos, TeamAbbr\n            FROM league_rosters\n            JOIN nfl_players ON league_rosters.PlayerID = nfl_players.player_id\n            WHERE LeagueID = ?\n            AND UserID = ?;", [leagueID, userID]);
        return this.query(statement);
    };
    DB.prototype.getUserInfo = function (userID) {
        var statement = mysql.format('SELECT * FROM userinfo WHERE id = ?', [userID]);
        return this.query(statement);
    };
    DB.prototype.getUserLoginInfo = function (userEmail) {
        var statement = mysql.format('SELECT * FROM userlogin where Email = ?', [userEmail]);
        return this.query(statement);
    };
    DB.prototype.getUserRecord = function (userID, leagueID) {
        var statement = mysql.format("SELECT\n            COUNT(IF((Player1ID = ? AND player1_score > player2_score)\n                OR (Player2ID = ? AND player2_score > player1_score),1,NULL)) AS wins,\n            COUNT(IF((Player1ID = ? AND player1_score < player2_score)\n                OR (Player2ID = ? AND player2_score < player1_score),1,NULL)) AS losses,\n            COUNT(IF((Player1ID = ? AND player1_score = player2_score)\n                OR (Player2ID = ? AND player2_score = player1_score),1,NULL)) AS ties\n            FROM league_schedule\n            JOIN (\n                SELECT LeagueID, UserID, year, week, SUM(WeekPts) AS player1_score\n                FROM league_rosters\n                JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID\n                GROUP BY LeagueID, UserID, year, week\n            ) AS p1_scores\n            ON (p1_scores.UserID = league_schedule.Player1ID)\n                AND (p1_scores.week = league_schedule.week)\n            JOIN (\n                SELECT LeagueID, UserID, year, week, SUM(WeekPts) AS player2_score\n                FROM league_rosters\n                JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID\n                GROUP BY LeagueID, UserID, year, week\n            ) AS p2_scores\n            ON (p2_scores.UserID = league_schedule.Player2ID)\n                AND (p2_scores.week = league_schedule.week)\n            WHERE (Player1ID = ? OR Player2ID = ?)\n            AND league_schedule.LeagueID = ?;", [userID, userID, userID, userID, userID, userID, userID, userID, leagueID]);
        return this.query(statement);
    };
    DB.prototype.getUserScore = function (userID, leagueID, week) {
        var params = [userID, leagueID];
        if (week) {
            params.push(week);
        }
        params.push(leagueID);
        var statement = mysql.format("SELECT SUM(WeekPts) AS score\n            FROM league_rosters\n            JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID\n            WHERE UserID = ?\n                AND LeagueID = ?\n                AND week " + (week ? '= ?' : '') + "\n                AND year = (SELECT year FROM leagues WHERE id = ?)\n            GROUP BY LeagueID, UserID, year, week;", params);
        return this.query(statement);
    };
    DB.prototype.getUserRoster = function (userID, leagueID) {
        var statement = mysql.format("SELECT PlayerName, PlayerPos, TeamAbbr\n            FROM league_rosters\n            JOIN nfl_players ON league_rosters.PlayerID = nfl_players.player_id\n            WHERE UserID = ? AND LeagueID = ?;", [userID, leagueID]);
        return this.query(statement);
    };
    DB.prototype.getUserSchedule = function (userID, leagueID) {
        var statement = mysql.format("SELECT week, Player1ID, Player2ID\n            FROM league_schedule\n            WHERE (Player1ID = 1 OR Player2ID = 1) AND LeagueID = 1;", [userID, userID, leagueID]);
        return this.query(statement);
    };
    DB.prototype.getUsername = function (userID) {
        var statement = mysql.format("SELECT Username FROM userinfo WHERE ID = ?", [userID]);
        return this.query(statement)['Username'];
    };
    DB.prototype.getPlayerInfo = function (playerID) {
        var statement = mysql.format("SELECT PlayerName, PlayerPos, TeamAbbr\n            FROM nfl_players\n            WHERE player_id = ?;", [playerID]);
        return this.query(statement);
    };
    DB.prototype.getPlayerStats = function (playerID, year, week) {
        var statement = mysql.format("SELECT *\n            FROM nfl_stats\n            WHERE PlayerID = ?\n            AND year = ?\n            AND week = ?;", [playerID, year, week]);
        return this.query(statement);
    };
    return DB;
}());
exports.DB = DB;
