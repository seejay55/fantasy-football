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
        //this.generateLeagueSchedule(1);
        //this.randomDraft(1);
    }
    DB.prototype.query = function (statement) {
        var _this = this;
        var queryResult;
        return new Promise(function (resolve, reject) {
            _this.pool.getConnection(function (conError, con) {
                if (conError) {
                    return reject('DB Error(Conn):\n' + conError);
                }
                con.query(statement, function (error, result) {
                    if (error) {
                        return reject('DB Error(Query):\n' + error);
                    }
                    queryResult = JSON.parse(JSON.stringify(result));
                    return resolve(queryResult);
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
        var previousName = '';
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
                    for (var i = 0; i < queryResult.length; i++) {
                        if (queryResult[i].PlayerName === previousName) {
                            formatedJSON = formatedJSON + ('"' + queryResult[i].Name + '": "' +
                                queryResult[i].GameStatValue + '",');
                        }
                        else if (i === 0) {
                            previousName = queryResult[i].PlayerName;
                            formatedJSON = formatedJSON + ('{"PlayerName":' + '"' + queryResult[i].PlayerName + '"' +
                                ',"PlayerPos":' + '"' + queryResult[i].PlayerPos + '"' + ',"TeamAbbr":' +
                                '"' + queryResult[i].TeamAbbr + '"' + ',"SeasonPts":' + '"' + queryResult[i].SeasonPts + '"' +
                                ',"Stats":{' + '"' + queryResult[i].Name + '": "' +
                                queryResult[i].GameStatValue + '",');
                        }
                        else {
                            formatedJSON = formatedJSON.slice(0, -1);
                            formatedJSON = formatedJSON + ('}},');
                            previousName = queryResult[i].PlayerName;
                            formatedJSON = formatedJSON + ('{"PlayerName":' + '"' + queryResult[i].PlayerName + '"' +
                                ',"PlayerPos":' + '"' + queryResult[i].PlayerPos + '"' + ',"TeamAbbr":' +
                                '"' + queryResult[i].TeamAbbr + '"' + ',"SeasonPts":' + '"' + queryResult[i].SeasonPts + '"' +
                                ',"Stats":{' + '"' + queryResult[i].Name + '": "' +
                                queryResult[i].GameStatValue + '",');
                        }
                    }
                    formatedJSON = formatedJSON.slice(0, -1);
                    formatedJSON = formatedJSON + '}}]';
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
    DB.prototype.createUser = function (userEmail, userPassword, userName, firstName, lastName, userID) {
        var _this = this;
        var statement;
        if (userID) {
            statement = mysql.format('INSERT INTO userlogin (ID, Email, Password) VALUES (?, ?, ?)', [userID, userEmail, userPassword]);
        }
        else {
            statement = mysql.format('INSERT INTO userlogin (Email, Password) VALUES (?, ?)', [userEmail, userPassword]);
        }
        var statement2 = mysql.format('INSERT INTO userinfo (ID, Username, FirstName, LastName) VALUES ((SELECT ID FROM userlogin WHERE Email = ?), ?, ?, ?)', [userEmail, userName, firstName, lastName]);
        var statement3 = mysql.format("SELECT userinfo.ID, Email, Username, ProfilePic, FirstName, LastName, FavoriteTeam\n            FROM userinfo\n            LEFT JOIN userlogin ON userinfo.ID = userlogin.ID\n            WHERE Email = ?", [userEmail]);
        return this.query(statement).then(function (result) {
            return _this.query(statement2).then(function (result2) {
                return _this.query(statement3);
            });
        });
    };
    DB.prototype.updateUser = function (ID, email, userName) {
        var _this = this;
        var statement = mysql.format('UPDATE userlogin SET Email = ? WHERE ID = ?', [email, ID]);
        var statement2 = mysql.format('UPDATE userinfo SET Username = ? WHERE ID = ?', [userName, ID]);
        return this.query(statement).then(function (result) {
            return _this.query(statement2);
        });
    };
    DB.prototype.updateUserPassword = function (password, ID) {
        var statement = mysql.format('UPDATE userlogin SET Password = ? WHERE ID = ?', [password, ID]);
        return this.query(statement);
    };
    DB.prototype.updateUserPersonal = function (ID, firstName, lastName, favoriteTeam) {
        var statement = mysql.format('UPDATE userinfo SET FirstName = ?, LastName = ?, FavoriteTeam = ? WHERE ID = ?', [firstName, lastName, favoriteTeam, ID]);
        return this.query(statement);
    };
    // Leagues
    DB.prototype.createLeague = function (leagueName, userID, numberTeams, typeScoring, leaguePrivacy, maxTrades) {
        var _this = this;
        var statement = mysql.format("INSERT INTO leagues (Name, Year, MaxTeams,\n            TypeScoring, LeaguePrivacy, MaxTrades) VALUES (?, ?, ?, ?, ?, ?)", [leagueName, 2017, numberTeams, typeScoring, leaguePrivacy, maxTrades]);
        var staetment2 = mysql.format("INSERT INTO league_members (LeagueID, UserID, TeamName, Commisioner)\n            VALUES ((SELECT ID FROM leagues WHERE Name = ?), ?, ?, 1)", [leagueName, userID, leagueName]);
        return this.query(statement).then(function (result) {
            return _this.query(staetment2);
        });
    };
    DB.prototype.updateLeague = function (leagueID, year, leagueName, numberTeams, typeScoring, leaguePrivacy, maxTrades) {
        var statement = mysql.format("UPDATE leagues\n            SET Name = ?, Year = ?, MaxTeams = ?, TypeScoring = ?, LeaguePrivacy = ?, MaxTrades = ?\n            WHERE ID = ?", [leagueName, 2017, numberTeams, typeScoring, leaguePrivacy, maxTrades, leagueID]);
        return this.query(statement);
    };
    DB.prototype.deleteMultpleLeague = function (leagueID) {
        var _this = this;
        var orStatement = '';
        for (var i = 1; i < leagueID.length; i++) {
            orStatement = orStatement + ' OR LeagueID = ?';
        }
        var statement = mysql.format('DELETE FROM league_members WHERE LeagueID = ?' + orStatement, leagueID);
        var statement2 = mysql.format('DELETE FROM league_rosters WHERE LeagueID = ?' + orStatement, leagueID);
        var statement3 = mysql.format('DELETE FROM league_schedule WHERE LeagueID = ?' + orStatement, leagueID);
        var statement4 = mysql.format('DELETE FROM league_invites WHERE LeagueID = ?' + orStatement, leagueID);
        var statement5 = mysql.format('DELETE FROM leagues WHERE ID = ?' + orStatement, leagueID);
        console.log(statement);
        console.log(statement2);
        console.log(statement3);
        console.log(statement4);
        console.log(statement5);
        return this.query(statement).then((function (result) {
            return _this.query(statement2).then((function (result2) {
                return _this.query(statement3).then((function (result3) {
                    return _this.query(statement4).then((function (result4) {
                        return _this.query(statement5);
                    }));
                }));
            }));
        }));
    };
    DB.prototype.deleteUser = function (userID) {
        var _this = this;
        var leagueArray = [];
        var statement = mysql.format('SELECT LeagueID FROM league_members where UserID = ? and Commisioner = 1', [userID]);
        var statement2 = mysql.format('DELETE FROM userlogin WHERE ID = ?', [userID]);
        return this.query(statement).then((function (result) {
            if (result.length > 0) {
                result.forEach(function (el) {
                    console.log(el.LeagueID);
                    leagueArray.push(el.LeagueID);
                });
                return _this.deleteMultpleLeague(leagueArray).then((function (result2) {
                    return _this.query(statement2);
                }));
            }
            else {
                console.log('User does not own any leagues');
                return _this.query(statement2);
            }
        }));
    };
    DB.prototype.deleteLeague = function (leagueID) {
        var _this = this;
        var statement = mysql.format('DELETE FROM league_members WHERE LeagueID = ?', [leagueID]);
        var statement2 = mysql.format('DELETE FROM league_rosters WHERE LeagueID = ?', [leagueID]);
        var statement3 = mysql.format('DELETE FROM league_schedule WHERE LeagueID = ?', [leagueID]);
        var statement4 = mysql.format('DELETE FROM league_invites WHERE LeagueID = ?', [leagueID]);
        var statement5 = mysql.format('DELETE FROM leagues WHERE ID = ?', [leagueID]);
        return this.query(statement).then((function (result) {
            return _this.query(statement2).then((function (result2) {
                return _this.query(statement3).then((function (result3) {
                    return _this.query(statement4).then((function (result4) {
                        return _this.query(statement5);
                    }));
                }));
            }));
        }));
    };
    // Find User
    DB.prototype.getUsersToInvite = function (senderID) {
        var statement = mysql.format('SELECT ID, Username from userinfo WHERE ID != ?', [senderID]);
        return this.query(statement);
    };
    // Makes sure the user isn't already in one of their leagues that they commision when inviting
    DB.prototype.getLeaguesToInvite = function (senderID, inviteeID) {
        var statement = mysql.format("SELECT parsedTable.ID, parsedTable.Name FROM\n            (\n              SELECT distinct(ID), Name FROM leagues\n              JOIN league_members ON league_members.LeagueID = leagues.ID\n              WHERE ID NOT IN (Select LeagueID from league_members WHERE UserID = ?)\n            ) as parsedTable\n            JOIN league_members ON league_members.LeagueID = parsedTable.ID\n            WHERE Commisioner = 1 AND UserID = ?", [inviteeID, senderID]);
        return this.query(statement);
    };
    DB.prototype.sendInvite = function (senderID, recieveID, leagueID) {
        var today = '';
        var date = new Date();
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        var statement = mysql.format('INSERT INTO league_invites (SenderID, RecieveID, LeagueID, Date) VALUES (?, ?, ?, ?)', [senderID, recieveID, leagueID, today]);
        return this.query(statement);
    };
    DB.prototype.getAllLeagues = function () {
        var statement = mysql.format("SELECT leagues.ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID, Username AS OwnerUserName\n            FROM leagues\n            LEFT JOIN (\n                SELECT LeagueID, COUNT(UserID) AS NumTeams\n                FROM league_members\n                GROUP BY LeagueID\n            ) AS member_count ON member_count.LeagueID = leagues.ID\n            LEFT JOIN (\n                SELECT LeagueID, UserID AS OwnerID\n                FROM league_members\n                WHERE Commisioner = TRUE\n                GROUP BY LeagueID\n            ) AS league_owner ON league_owner.LeagueID = leagues.ID\n            LEFT JOIN userinfo ON userinfo.ID = OwnerID", []);
        return this.query(statement);
    };
    DB.prototype.getAllLeaguesForUser = function (userID) {
        var statement = mysql.format("SELECT get_league_info.ID, Name, Year, MaxTeams,\n            TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID, Username AS OwnerUserName\n            FROM fantasyfootball18.league_members\n            LEFT JOIN (\n                SELECT ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID\n                FROM leagues\n                LEFT JOIN (\n                    SELECT LeagueID, COUNT(UserID) AS NumTeams\n                    FROM league_members\n                    GROUP BY LeagueID\n                ) AS member_count ON member_count.LeagueID = ID\n                LEFT JOIN (\n                    SELECT LeagueID, UserID AS OwnerID\n                    FROM league_members\n                    WHERE Commisioner = TRUE\n                    GROUP BY LeagueID\n                ) AS league_owner ON league_owner.LeagueID = ID\n            ) AS get_league_info ON league_members.LeagueID = get_league_info.ID\n            LEFT JOIN userinfo ON userinfo.ID = OwnerID\n            WHERE UserID = ?", [userID]);
        return this.query(statement);
    };
    DB.prototype.searchUserByName = function (searchParams) {
        searchParams = '%' + searchParams + '%';
        var statement = mysql.format('SELECT * from userinfo WHERE Username LIKE ?', [searchParams]);
        return this.query(statement);
    };
    // LeagueInvites
    DB.prototype.getAllLeagueInvites = function (userID) {
        var statement = mysql.format("SELECT SenderID, Username AS SenderUsername, FirstName AS SenderFirstName, LastName AS SenderLastName,\n            LeagueID, Name AS LeagueName, Date, datediff(NOW(), Date) AS Age\n        FROM league_invites\n        JOIN leagues ON league_invites.leagueID = leagues.ID\n        JOIN userinfo ON league_invites.SenderID = userinfo.ID\n        WHERE RecieveID = ?", [userID]);
        return this.query(statement);
    };
    DB.prototype.insertUserIntoLeague = function (recieveID, leagueID, teamName) {
        var _this = this;
        var statement = mysql.format('INSERT INTO league_members (LeagueID, UserID, TeamName, Commisioner) VALUES (?, ?, ?, 0)', [leagueID, recieveID, teamName]);
        var statement2 = mysql.format('DELETE FROM league_invites WHERE RecieveID = ? AND LeagueID = ?', [recieveID, leagueID]);
        return this.query(statement).then(function (result) {
            return _this.query(statement2);
        });
    };
    DB.prototype.deleteInvite = function (recieveID, leagueID) {
        var statement = mysql.format('DELETE FROM league_invites WHERE RecieveID = ? AND LeagueID = ?', [recieveID, leagueID]);
        return this.query(statement);
    };
    //  Find League
    DB.prototype.getLeagueInfo = function (leagueID) {
        var statement = mysql.format("SELECT leagues.ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID, UserName AS OwnerUserName\n            FROM leagues\n            LEFT JOIN (\n                SELECT LeagueID, COUNT(UserID) AS NumTeams\n                FROM league_members\n                GROUP BY LeagueID\n            ) AS member_count ON member_count.LeagueID = leagues.ID\n            LEFT JOIN (\n                SELECT LeagueID, UserID AS OwnerID\n                FROM league_members\n                WHERE Commisioner = TRUE\n                GROUP BY LeagueID\n            ) AS league_owner ON league_owner.LeagueID = leagues.ID\n            LEFT JOIN userinfo ON userinfo.ID = OwnerID\n            WHERE leagues.ID = ?", [leagueID]);
        return this.query(statement);
    };
    DB.prototype.searchLeaguesByName = function (searchParams) {
        searchParams = '%' + searchParams + '%';
        var statement = mysql.format("SELECT ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID\n            FROM leagues\n            LEFT JOIN (\n                SELECT LeagueID, COUNT(UserID) AS NumTeams\n                FROM league_members\n                GROUP BY LeagueID\n            ) AS member_count ON member_count.LeagueID = ID\n            LEFT JOIN (\n                SELECT LeagueID, UserID AS OwnerID\n                FROM league_members\n                WHERE Commisioner = TRUE\n                GROUP BY LeagueID\n            ) AS league_owner ON league_owner.LeagueID = ID\n            WHERE Name LIKE ?", [searchParams]);
        return this.query(statement);
    };
    DB.prototype.getLeagueMembers = function (leagueID) {
        var statement = mysql.format("SELECT UserID, Username, TeamName, Commisioner\n            FROM league_members\n            JOIN userinfo ON UserID = userinfo.ID\n            WHERE LeagueID = ?;", [leagueID]);
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
        var statement = mysql.format("SELECT\n            COUNT(IF((Player1ID = ? AND player1_score > player2_score) OR (Player2ID = ? AND player2_score > player1_score),1,NULL)) AS wins,\n            COUNT(IF((Player1ID = ? AND player1_score < player2_score) OR (Player2ID = ? AND player2_score < player1_score),1,NULL)) AS losses,\n            COUNT(IF((Player1ID = ? AND player1_score = player2_score) OR (Player2ID = ? AND player2_score = player1_score),1,NULL)) AS ties\n            FROM league_schedule\n            LEFT JOIN (\n                SELECT LeagueID, UserID, Year, Week, SUM(WeekPts) AS player1_score\n                FROM league_rosters\n                JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID\n                GROUP BY LeagueID, UserID, Year, Week\n            ) AS p1_scores\n            ON (p1_scores.UserID = league_schedule.Player1ID)\n                AND (p1_scores.Week = league_schedule.Week)\n            LEFT JOIN (\n                SELECT LeagueID, UserID, Year, Week, SUM(WeekPts) AS player2_score\n                FROM league_rosters\n                JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID\n                GROUP BY LeagueID, UserID, Year, Week\n            ) AS p2_scores\n            ON (p2_scores.UserID = league_schedule.Player2ID)\n                AND (p2_scores.Week = league_schedule.Week)\n            WHERE league_schedule.LeagueID = ?\n            AND p1_scores.Year = (SELECT Year FROM leagues WHERE ID = ?)\n            AND p2_scores.Year = (SELECT Year FROM leagues WHERE ID = ?)", [userID, userID, userID, userID, userID, userID, leagueID, leagueID, leagueID]);
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
        var statement = mysql.format("SELECT league_rosters.UserID, Username, TeamName, week as Week, SUM(WeekPts) AS score\n            FROM league_rosters\n            JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID\n            JOIN userinfo ON league_rosters.UserID = userinfo.ID\n            JOIN league_members ON league_rosters.UserID = league_members.UserID\n            WHERE league_rosters.LeagueID = ?\n                AND league_rosters.UserID " + (userID ? '= ?' : '') + "\n                AND week " + (week ? '= ?' : '') + "\n                AND year = (SELECT year FROM leagues WHERE id = ?)\n            GROUP BY league_rosters.LeagueID, league_rosters.UserID, year, week;", params);
        return this.query(statement);
    };
    DB.prototype.getUserRoster = function (userID, leagueID, week) {
        var statement = mysql.format("SELECT PlayerName, PlayerPos, TeamAbbr, SeasonPts, WeekPts, Active\n            FROM league_rosters\n            JOIN nfl_players ON league_rosters.PlayerID = nfl_players.player_id\n            JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID\n            WHERE UserID = ? AND LeagueID = ? AND Year = 2017 AND Week = ?", [userID, leagueID, week]);
        return this.query(statement);
    };
    DB.prototype.getUserSchedule = function (userID, leagueID) {
        var statement = mysql.format("SELECT week, Player1ID, Player2ID\n            FROM league_schedule\n            WHERE (Player1ID = ? OR Player2ID = ?) AND LeagueID = ?;", [userID, userID, leagueID]);
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
        var statement = mysql.format("SELECT PlayerName, PlayerPos, TeamAbbr, SeasonPts, Name, GameStatValue FROM game_stats_totals\n            INNER JOIN game_stats_numbers ON game_stats_totals.StatID = game_stats_numbers.ID\n            INNER JOIN nfl_players ON nfl_players.player_id = game_stats_totals.PlayerID\n            JOIN (\n              SELECT DISTINCT(PlayerID), SeasonPts\n                FROM nfl_stats\n                WHERE Year = 2017\n            ) AS temp ON temp.PlayerID = game_stats_totals.PlayerID\n            ORDER BY SeasonPts desc, PlayerName desc", []);
        return this.query2(statement);
    };
    DB.prototype.getSeasonPoints = function () {
        var statement = mysql.format("SELECT PlayerName, SeasonPts, PlayerPos, TeamAbbr FROM game_stats_totals\n        LEFT JOIN nfl_stats ON game_stats_totals.PlayerID = nfl_stats.PlayerID\n        LEFT JOIN nfl_players ON game_stats_totals.PlayerID = nfl_players.player_id\n        WHERE Year = 2017\n        GROUP BY PlayerName", []);
        return this.query(statement);
    };
    DB.prototype.getRequestsForLeague = function (leagueID) {
        var statement = mysql.format("SELECT SenderID, Username, LeagueID, TeamName FROM league_request\n          INNER JOIN userinfo ON league_request.SenderID = userinfo.ID\n          WHERE LeagueID = ?", [leagueID]);
        return this.query(statement);
    };
    DB.prototype.requestInvite = function (senderID, leagueID, teamName) {
        var statement = mysql.format("INSERT INTO league_request (SenderID, LeagueID, TeamName) VALUES (?, ?, ?)", [senderID, leagueID, teamName]);
        return this.query(statement);
    };
    DB.prototype.acceptRequestToLeague = function (senderID, leagueID, teamName) {
        var _this = this;
        var statement = mysql.format('INSERT INTO league_members (LeagueID, UserID, TeamName, Commisioner) VALUES (?, ?, ?, 0)', [leagueID, senderID, teamName]);
        var statement2 = mysql.format("DELETE FROM league_request WHERE SenderID = ? AND LeagueID = ?", [senderID, leagueID]);
        return this.query(statement).then(function (result) {
            return _this.query(statement2);
        });
    };
    DB.prototype.joinLeague = function (senderID, leagueID, teamName) {
        var statement = mysql.format('INSERT INTO league_members (LeagueID, UserID, TeamName, Commisioner) VALUES (?, ?, ?, 0)', [leagueID, senderID, teamName]);
        return this.query(statement);
    };
    DB.prototype.deleteRequestToLeague = function (senderID, leagueID) {
        var statement = mysql.format("DELETE FROM league_request WHERE SenderID = ? and LeagueID = ?", [senderID, leagueID]);
        return this.query(statement);
    };
    DB.prototype.generateLeagueSchedule = function (leagueID) {
        var _this = this;
        var statement = mysql.format("SELECT UserID\n            FROM league_members\n            WHERE LeagueID = ?", [leagueID]);
        return this.query(statement).then(function (result) {
            var users = [];
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var user = result_1[_i];
                users.push(user.UserID);
            }
            for (var i = 0; i < users.length; i++) {
                // choose a random not-yet-placed item to place there
                // must be an item AFTER the current item, because the stuff
                // before has all already been
                var randomChoiceIndex = void 0;
                do {
                    randomChoiceIndex = Math.floor(Math.random() * (users.length - 0)) + 0;
                } while (randomChoiceIndex === i);
                // place our random choice in the spot by swapping
                _a = [users[randomChoiceIndex], users[i]], users[i] = _a[0], users[randomChoiceIndex] = _a[1];
            }
            console.log(users);
            var schedule = [];
            if (users.length % 2 !== 0) {
                users.push(-1);
            }
            var last = users[users.length - 1];
            var previousRound = [];
            for (var i = 0; i < users.length / 2; i++) {
                previousRound.push(users[i]);
                previousRound.push(users[users.length - i - 1]);
                schedule.push({ week: 1, player1: users[i], player2: users[users.length - i - 1] });
            }
            var weeks = 13;
            for (var i = 2; i <= weeks; i++) {
                var currentRound = [];
                var lastFromPreviousRound = previousRound.pop();
                previousRound.splice(previousRound.findIndex(function (value) { return value === last; }), 1);
                schedule.push({ week: i, player1: last, player2: lastFromPreviousRound });
                currentRound.push(last);
                currentRound.push(lastFromPreviousRound);
                for (var j = previousRound.length - 1; j > 0; j -= 2) {
                    var a = previousRound[j - 1];
                    var b = previousRound[j];
                    currentRound.push(a);
                    currentRound.push(b);
                    schedule.push({ week: i, player1: a, player2: b });
                }
                previousRound = currentRound;
            }
            var inserts = '';
            var insertValues = [];
            for (var i = 0; i < schedule.length; i++) {
                inserts += '(?,?,?,?)';
                if (i !== schedule.length - 1) {
                    inserts += ',';
                }
                insertValues.push(leagueID);
                insertValues.push(schedule[i]['week']);
                insertValues.push(schedule[i]['player1']);
                insertValues.push(schedule[i]['player2']);
            }
            var statement2 = mysql.format("INSERT INTO league_schedule\n                VALUES " + inserts, insertValues);
            console.log(statement2);
            _this.query(statement2);
            var _a;
        });
    };
    DB.prototype.randomDraft = function (leagueID) {
        var _this = this;
        var rosters = [];
        var statement = mysql.format("SELECT UserID\n            FROM league_members\n            WHERE LeagueID = ?", [leagueID]);
        return this.query(statement).then(function (result) {
            var users = [];
            for (var _i = 0, result_2 = result; _i < result_2.length; _i++) {
                var user = result_2[_i];
                users.push(user.UserID);
                rosters.push([]);
            }
            var positions = ['QB', 'RB', 'RB', 'WR', 'WR', 'TE', 'FLEX', 'DEF', 'K'];
            var bench = 6;
            var p = new Promise(function (resolve) {
                resolve();
            });
            var _loop_1 = function (round) {
                p = p.then(function (_) { return new Promise(function (resolve) {
                    // randomize draft order
                    for (var i = 0; i < users.length; i++) {
                        var randomChoiceIndex = void 0;
                        do {
                            randomChoiceIndex = Math.floor(Math.random() * (users.length - 0)) + 0;
                        } while (randomChoiceIndex === i);
                        _a = [users[randomChoiceIndex], users[i]], users[i] = _a[0], users[randomChoiceIndex] = _a[1];
                    }
                    if (round < positions.length) {
                        var pos = positions[round];
                        if (pos === 'FLEX') {
                            statement = mysql.format("SELECT DISTINCT(PlayerID), PlayerName, PlayerPos, TeamAbbr\n                                FROM nfl_stats\n                                JOIN nfl_players ON nfl_stats.PlayerID = nfl_players.player_id\n                                WHERE PlayerPos IN ('RB', 'WR', 'TE')\n                                AND PlayerID NOT IN\n                                (\n                                    SELECT PlayerID\n                                    FROM league_rosters\n                                    WHERE LeagueID = ?\n                                )\n                                AND Year = (\n                                    SELECT Year\n                                    FROM leagues\n                                    WHERE ID = ?\n                                )\n                                ORDER BY SeasonPts DESC\n                                LIMIT ?", [leagueID, leagueID, users.length]);
                        }
                        else {
                            statement = mysql.format("SELECT DISTINCT(PlayerID), PlayerName, PlayerPos, TeamAbbr\n                                FROM nfl_stats\n                                JOIN nfl_players ON nfl_stats.PlayerID = nfl_players.player_id\n                                WHERE PlayerPos = ?\n                                AND PlayerID NOT IN\n                                (\n                                    SELECT PlayerID\n                                    FROM league_rosters\n                                    WHERE LeagueID = ?\n                                )\n                                AND Year = (\n                                    SELECT Year\n                                    FROM leagues\n                                    WHERE ID = ?\n                                )\n                                ORDER BY SeasonPts DESC\n                                LIMIT ?", [pos, leagueID, leagueID, users.length]);
                        }
                    }
                    else {
                        statement = mysql.format("SELECT DISTINCT(PlayerID), PlayerName, PlayerPos, TeamAbbr\n                            FROM nfl_stats\n                            JOIN nfl_players ON nfl_stats.PlayerID = nfl_players.player_id\n                            AND PlayerID NOT IN\n                            (\n                                SELECT PlayerID\n                                FROM league_rosters\n                                WHERE LeagueID = ?\n                            )\n                            AND Year = (\n                                SELECT Year\n                                FROM leagues\n                                WHERE ID = ?\n                            )\n                            ORDER BY SeasonPts DESC\n                            LIMIT ?", [leagueID, leagueID, users.length]);
                    }
                    _this.query(statement).then(function (result2) {
                        var inserts = '';
                        var insertValues = [];
                        for (var i = 0; i < users.length; i++) {
                            insertValues.push(leagueID);
                            insertValues.push(result2[i]['PlayerID']);
                            insertValues.push(users[i]);
                            if (round < positions.length) {
                                insertValues.push(1);
                            }
                            else {
                                insertValues.push(0);
                            }
                            inserts += '(?,?,?,?)';
                            if (i !== users.length - 1) {
                                inserts += ',';
                            }
                        }
                        var statement3 = mysql.format("INSERT INTO league_rosters\n                            VALUES " + inserts, insertValues);
                        _this.query(statement3).then(function (result3) {
                            resolve();
                        });
                    });
                    var _a;
                }); });
            };
            for (var round = 0; round < 15; round++) {
                _loop_1(round);
            }
        });
    };
    DB.prototype.userLeaveLeague = function (userID, leagueID) {
        var _this = this;
        var statement = mysql.format("DELETE FROM league_members WHERE LeagueID = ? AND UserID = ?", [leagueID, userID]);
        var statement2 = mysql.format("DELETE FROM league_rosters WHERE LeagueID = ? AND UserID = ?", [leagueID, userID]);
        var statement3 = mysql.format("DELETE FROM league_schedule WHERE (Player1ID = ? OR Player2ID = ?) AND LeagueID = ?", [userID, userID, leagueID]);
        return this.query(statement).then(function (result) {
            return _this.query(statement2).then(function (result2) {
                return _this.query(statement3);
            });
        });
    };
    return DB;
}());
exports.DB = DB;
