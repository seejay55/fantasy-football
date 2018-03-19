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
    DB.prototype.query2 = function (statement) {
        var _this = this;
        var queryResult;
        var formatedJSON = '[';
        var previousName;
        var check = 0;
        return new Promise(function (resolve, reject) {
            _this.pool.getConnection(function (conError, con) {
                if (conError) {
                    reject('DB Error(Conn):\n' + conError);
                }
                con.query(statement, function (error, result) {
                    if (error) {
                        reject('DB Error(Query):\n' + error);
                    }
                    previousName = '';
                    queryResult = JSON.parse(JSON.stringify(result));
                    for (var i = 0; i < queryResult.length; i++) {
                        if (queryResult[i].PlayerName === previousName) {
                            formatedJSON = formatedJSON + ('{"Name":' + '"' + queryResult[i].Name + '"' + ',"GameStatValue":' +
                                queryResult[i].GameStatValue + '},');
                        }
                        else if (i === 0) {
                            previousName = queryResult[i].PlayerName;
                            formatedJSON = formatedJSON + ('{"PlayerName":' + '"' + queryResult[i].PlayerName + '"' +
                                ',"PlayerPos":' + '"' + queryResult[i].PlayerPos + '"' + ',"TeamAbbr":' +
                                '"' + queryResult[i].TeamAbbr + '"' + ',"Stats":[');
                        }
                        else if (check === 0) {
                            formatedJSON = formatedJSON + ('{"Name":' + '"' + queryResult[i].Name + '"' + ',"GameStatValue":' +
                                queryResult[i].GameStatValue + '},');
                            check = 1;
                        }
                        else {
                            check = 0;
                            formatedJSON = formatedJSON.slice(0, -1);
                            formatedJSON = formatedJSON + (']},');
                            previousName = queryResult[i].PlayerName;
                            formatedJSON = formatedJSON + ('{"PlayerName":' + '"' + queryResult[i].PlayerName + '"' +
                                ',"PlayerPos":' + '"' + queryResult[i].PlayerPos + '"' + ',"TeamAbbr":' +
                                '"' + queryResult[i].TeamAbbr + '"' + ',"Stats":[');
                        }
                    }
                    formatedJSON = formatedJSON.slice(0, -1);
                    formatedJSON = formatedJSON + ']}]';
                    resolve(JSON.parse(formatedJSON));
                }).on('end', function () {
                    con.release();
                });
            });
        });
    };
    DB.prototype.getAllUsers = function () {
        var statement = 'SELECT * FROM userinfo';
        return this.query(statement);
    };
    DB.prototype.createUser = function (userEmail, userPassword, userName) {
        var _this = this;
        var statement = mysql.format('INSERT INTO userlogin (Email, Password) VALUES (?, ?)', [userEmail, userPassword]);
        var statement2 = mysql.format('INSERT INTO userinfo (ID, Username) VALUES ((SELECT ID FROM userlogin WHERE Email = ?), ?)', [userEmail, userName]);
        return this.query(statement).then(function () {
            _this.query(statement2);
        });
    };
    DB.prototype.updateUser = function (ID, userName, userPassword) {
        var _this = this;
        var statement = mysql.format('UPDATE userlogin SET Password = ? WHERE ID = ?', [userPassword, ID]);
        var statement2 = mysql.format('UPDATE userinfo SET Username = ? WHERE ID = ?', [userName, ID]);
        return this.query(statement).then(function () {
            _this.query(statement2);
        });
    };
    DB.prototype.updateUserPersonal = function (ID, firstName, lastName, favoriteTeam) {
        var statement = mysql.format('UPDATE userinfo SET FirstName = ?, LastName = ?, FavoriteTeam = ? WHERE ID = ?', [firstName, lastName, favoriteTeam, ID]);
        return this.query(statement);
    };
    DB.prototype.deleteUser = function (ID) {
        var statement = mysql.format('DELETE FROM userlogin WHERE ID = ?', [ID]);
        return this.query(statement);
    };
    // Leagues
    DB.prototype.createLeague = function (leagueName, userID, numberTeams, typeScoring, leaguePrivacy, maxTrades) {
        var _this = this;
        var statement = mysql.format("INSERT INTO leagues (Name, Year, MaxTeams,\n            TypeScoring, LeaguePrivacy, MaxTrades) VALUES (?, ?, ?, ?, ?, ?)", [leagueName, 2017, numberTeams, typeScoring, leaguePrivacy, maxTrades]);
        // might have to change cause names of leagues could be the same, also have to think about how they get their own userID
        var staetment2 = mysql.format("INSERT INTO league_members (LeagueID, UserID, TeamName, Commisioner)\n            VALUES ((SELECT ID FROM leagues WHERE Name = ?), ?, ?, 1)", [leagueName, userID, leagueName]);
        return this.query(statement).then(function () {
            _this.query(staetment2);
        });
    };
    DB.prototype.deleteLeague = function (leagueID) {
        var statement = mysql.format('DELETE FROM leagues WHERE ID = ?', [leagueID]);
        return this.query(statement);
    };
    // Find User
    DB.prototype.getUsersToInvite = function (senderID) {
        var statement = mysql.format('SELECT ID, Username from userinfo WHERE ID != ?', [senderID]);
        return this.query(statement);
    };
    // Makes sure the user isn't already in one of their leagues that they commision when inviting
    // Change if there is a better way of doing this
    DB.prototype.getLeaguesToInvite = function (senderID, inviteeID) {
        var statement = mysql.format("SELECT parsedTable.ID, parsedTable.Name FROM\n            (SELECT distinct(ID), Name FROM leagues\n            JOIN league_members ON league_members.LeagueID = leagues.ID\n            WHERE ID NOT IN (Select LeagueID from league_members WHERE UserID = ?)) as parsedTable\n            JOIN league_members ON league_members.LeagueID = parsedTable.ID WHERE Commisioner = 1 AND UserID = ?", [inviteeID, senderID]);
        return this.query(statement);
    };
    DB.prototype.sendInvite = function (senderID, recieveID, leagueID, date) {
        var statement = mysql.format('INSERT INTO league_invites (SenderID, RecieveID, LeagueID, Date) VALUES (?, ?, ?, ?)', [senderID, recieveID, leagueID, date]);
        return this.query(statement);
    };
    DB.prototype.getAllLeagues = function () {
        var statement = mysql.format("SELECT ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID\n            FROM leagues\n            LEFT JOIN (\n                SELECT LeagueID, COUNT(UserID) AS NumTeams\n                FROM league_members\n                GROUP BY LeagueID\n            ) AS member_count ON member_count.LeagueID = ID\n            LEFT JOIN (\n                SELECT LeagueID, UserID AS OwnerID\n                FROM league_members\n                WHERE Commisioner = TRUE\n                GROUP BY LeagueID\n            ) AS league_owner ON league_owner.LeagueID = ID", []);
        return this.query(statement);
    };
    DB.prototype.getAllLeaguesForUser = function (userID) {
        var statement = mysql.format("SELECT ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID\n            FROM fantasyfootball18.league_members\n            LEFT JOIN (\n                SELECT ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID\n                FROM leagues\n                LEFT JOIN (\n                    SELECT LeagueID, COUNT(UserID) AS NumTeams\n                    FROM league_members\n                    GROUP BY LeagueID\n                ) AS member_count ON member_count.LeagueID = ID\n                LEFT JOIN (\n                    SELECT LeagueID, UserID AS OwnerID\n                    FROM league_members\n                    WHERE Commisioner = TRUE\n                    GROUP BY LeagueID\n                ) AS league_owner ON league_owner.LeagueID = ID\n            ) AS get_league_info ON league_members.LeagueID = get_league_info.ID\n            WHERE UserID = ?", [userID]);
        return this.query(statement);
    };
    DB.prototype.searchUserResults = function (senderID, searchParams) {
        searchParams = '%' + searchParams + '%';
        var statement = mysql.format('SELECT ID, Username from userinfo WHERE ID != ? AND Username LIKE ?', [senderID, searchParams]);
        return this.query(statement);
    };
    // LeagueInvites
    DB.prototype.getAllLeagueInvites = function (userID) {
        var statement = mysql.format("SELECT SenderID, Username AS SenderUsername, FirstName AS SenderFirstName, LastName AS SenderLastName,\n            LeagueID, Name AS LeagueName, Date, datediff(NOW(), Date) AS Age\n        FROM league_invites\n        JOIN leagues ON league_invites.leagueID = leagues.ID\n        JOIN userinfo ON league_invites.SenderID = userinfo.ID\n        WHERE RecieveID = ?", [userID]);
        return this.query(statement);
    };
    // Preston needs to add 1 to the current team count for the 'numTeams' parameter
    DB.prototype.insertUserIntoLeague = function (recieveID, leagueID) {
        var _this = this;
        var statement = mysql.format('INSERT INTO league_members (LeagueID, UserID, Commisioner) VALUES (? , ?, 0)', [leagueID, recieveID]);
        var statement2 = mysql.format('DELETE FROM league_invites WHERE RecieveID = ? AND LeagueID = ?', [recieveID, leagueID]);
        return this.query(statement).then(function () {
            _this.query(statement2);
        });
    };
    DB.prototype.deleteInvite = function (recieveID, leagueID) {
        var statement = mysql.format('DELETE FROM league_invites WHERE RecieveID = ? AND LeagueID = ?', [recieveID, leagueID]);
        return this.query(statement);
    };
    //  Find League
    DB.prototype.getLeagueInfo = function (leagueID) {
        var statement = mysql.format("SELECT ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID\n            FROM leagues\n            LEFT JOIN (\n                SELECT LeagueID, COUNT(UserID) AS NumTeams\n                FROM league_members\n                GROUP BY LeagueID\n            ) AS member_count ON member_count.LeagueID = ID\n            LEFT JOIN (\n                SELECT LeagueID, UserID AS OwnerID\n                FROM league_members\n                WHERE Commisioner = TRUE\n                GROUP BY LeagueID\n            ) AS league_owner ON league_owner.LeagueID = ID\n            WHERE ID = ?", [leagueID]);
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
        var statement = mysql.format("SELECT UserID, PlayerName, PlayerPos, TeamAbbr\n            FROM league_rosters\n            JOIN nfl_players ON league_rosters.PlayerID = nfl_players.player_id\n            WHERE LeagueID = ?;", [leagueID]);
        return this.query(statement);
    };
    DB.prototype.getRoster = function (leagueID, userID) {
        var statement = mysql.format("SELECT PlayerName, PlayerPos, TeamAbbr\n            FROM league_rosters\n            JOIN nfl_players ON league_rosters.PlayerID = nfl_players.player_id\n            WHERE LeagueID = ?\n            AND UserID = ?;", [leagueID, userID]);
        return this.query(statement);
    };
    DB.prototype.getUserInfoById = function (userID) {
        var statement = mysql.format('SELECT * FROM userinfo WHERE ID = ?', [userID]);
        return this.query(statement);
    };
    DB.prototype.getUserInfoByUsername = function (userName) {
        var statement = mysql.format('SELECT * FROM userinfo WHERE Username = ?', [userName]);
        return this.query(statement);
    };
    DB.prototype.getUserLoginInfo = function (userEmail) {
        var statement = mysql.format('SELECT * FROM userlogin where Email = ?', [userEmail]);
        return this.query(statement);
    };
    DB.prototype.getUserRecord = function (userID, leagueID) {
        var statement = mysql.format("SELECT\n            COUNT(IF((Player1ID = ? AND player1_score > player2_score)\n                OR (Player2ID = ? AND player2_score > player1_score),1,NULL)) AS Wins,\n            COUNT(IF((Player1ID = ? AND player1_score < player2_score)\n                OR (Player2ID = ? AND player2_score < player1_score),1,NULL)) AS Losses,\n            COUNT(IF((Player1ID = ? AND player1_score = player2_score)\n                OR (Player2ID = ? AND player2_score = player1_score),1,NULL)) AS Ties\n            FROM league_schedule\n            JOIN (\n                SELECT LeagueID, UserID, year, week, SUM(WeekPts) AS player1_score\n                FROM league_rosters\n                JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID\n                GROUP BY LeagueID, UserID, year, week\n            ) AS p1_scores\n            ON (p1_scores.UserID = league_schedule.Player1ID)\n                AND (p1_scores.week = league_schedule.week)\n            JOIN (\n                SELECT LeagueID, UserID, year, week, SUM(WeekPts) AS player2_score\n                FROM league_rosters\n                JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID\n                GROUP BY LeagueID, UserID, year, week\n            ) AS p2_scores\n            ON (p2_scores.UserID = league_schedule.Player2ID)\n                AND (p2_scores.week = league_schedule.week)\n            WHERE (Player1ID = ? OR Player2ID = ?)\n            AND league_schedule.LeagueID = ?;", [userID, userID, userID, userID, userID, userID, userID, userID, leagueID]);
        return this.query(statement);
    };
    DB.prototype.getUserScore = function (leagueID, userID, week) {
        var params = [leagueID];
        if (userID) {
            params.push(userID);
        }
        if (week) {
            params.push(week);
        }
        params.push(leagueID);
        var statement = mysql.format("SELECT UserID, week as Week, SUM(WeekPts) AS score\n            FROM league_rosters\n            JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID\n            WHERE LeagueID = ?\n                AND UserID " + (userID ? '= ?' : '') + "\n                AND week " + (week ? '= ?' : '') + "\n                AND year = (SELECT year FROM leagues WHERE id = ?)\n            GROUP BY LeagueID, UserID, year, week;", params);
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
    // Luke Stats
    DB.prototype.getStats = function () {
        var statement = mysql.format("SELECT PlayerName, PlayerPos, TeamAbbr, Name, GameStatValue FROM nfl_players\n            JOIN game_stats_totals ON nfl_players.player_id = game_stats_totals.PlayerID\n            JOIN game_stats_numbers ON game_stats_totals.StatID = game_stats_numbers.ID", []);
        return this.query2(statement);
    };
    return DB;
}());
exports.DB = DB;
