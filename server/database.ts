import * as mysql from 'mysql';
import { MysqlError } from 'mysql';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { state } from '@angular/core';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { stat } from 'fs';
import { element } from 'protractor';

export class DB {
    private pool: mysql.Pool;

    constructor(address: string, user: string, pass: string, database: string) {
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

    private query(statement: string): any {
        let queryResult: any;
        return new Promise((resolve, reject) => {
            this.pool.getConnection((conError: MysqlError, con: mysql.PoolConnection) => {
                if (conError) {
                    return reject('DB Error(Conn):\n' + conError);
                }
                con.query(statement, (error: MysqlError, result: any) => {
                    if (error) {
                        return reject('DB Error(Query):\n' + error);
                    }
                    queryResult = JSON.parse(JSON.stringify(result));
                    return resolve(queryResult);
                }).on('end', () => {
                    con.release();
                });
            });
        });
    }

    private query2(statement: string): any {
        let queryResult: any;
        let formatedJSON = '[';
        let previousName = '';
        return new Promise((resolve, reject) => {
            this.pool.getConnection((conError: MysqlError, con: mysql.PoolConnection) => {
                if (conError) {
                    reject('DB Error(Conn):\n' + conError);
                }
                con.query(statement, (error: MysqlError, result: any) => {
                    if (error) {
                        reject('DB Error(Query):\n' + error);
                    }
                    queryResult = JSON.parse(JSON.stringify(result));
                    for (let i = 0; i < queryResult.length; i++) {
                        if (queryResult[i].PlayerName === previousName) {
                            formatedJSON = formatedJSON + ('"' + queryResult[i].Name + '": "' +
                                queryResult[i].GameStatValue + '",');
                        } else if (i === 0) {
                            previousName = queryResult[i].PlayerName;
                            formatedJSON = formatedJSON + ('{"PlayerName":' + '"' + queryResult[i].PlayerName + '"' +
                                ',"PlayerPos":' + '"' + queryResult[i].PlayerPos + '"' + ',"TeamAbbr":' +
                                '"' + queryResult[i].TeamAbbr + '"' + ',"SeasonPts":' + '"' + queryResult[i].SeasonPts + '"' +
                                ',"Stats":{' + '"' + queryResult[i].Name + '": "' +
                                queryResult[i].GameStatValue + '",');
                        } else {
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

                }).on('end', () => {
                    con.release();
                });
            });
        });
    }

    getAllUsers(): any {
        const statement =
            'SELECT * FROM userinfo';
        return this.query(statement);
    }

    createUser(userEmail: string, userPassword: string, userName: string, firstName: string, lastName: string, userID?: number): any {
        let statement;
        if (userID) {
            statement = mysql.format(
                'INSERT INTO userlogin (ID, Email, Password) VALUES (?, ?, ?)',
                [userID, userEmail, userPassword]
            );
        } else {
            statement = mysql.format(
                'INSERT INTO userlogin (Email, Password) VALUES (?, ?)',
                [userEmail, userPassword]
            );
        }
        const statement2 = mysql.format(
            'INSERT INTO userinfo (ID, Username, FirstName, LastName) VALUES ((SELECT ID FROM userlogin WHERE Email = ?), ?, ?, ?)',
            [userEmail, userName, firstName, lastName]
        );
        const statement3 = mysql.format(
            `SELECT userinfo.ID, Email, Username, ProfilePic, FirstName, LastName, FavoriteTeam
            FROM userinfo
            LEFT JOIN userlogin ON userinfo.ID = userlogin.ID
            WHERE Email = ?`,
            [userEmail]
        );

        return this.query(statement).then((result) => {
            return this.query(statement2).then((result2) => {
                return this.query(statement3);
            });
        });
    }

    updateUser(ID: number, email: string, userName: string): any {
        const statement = mysql.format(
            'UPDATE userlogin SET Email = ? WHERE ID = ?',
            [email, ID]
        );
        const statement2 = mysql.format(
            'UPDATE userinfo SET Username = ? WHERE ID = ?',
            [userName, ID]
        );
        return this.query(statement).then((result) => {
            return this.query(statement2);
        });
    }

    updateUserPassword(password: string, ID: number): any {
        const statement = mysql.format(
            'UPDATE userlogin SET Password = ? WHERE ID = ?',
            [password, ID]
        );
        return this.query(statement);
    }

    updateUserPersonal(ID: number, firstName: string, lastName: string, favoriteTeam: string): any {
        const statement = mysql.format(
            'UPDATE userinfo SET FirstName = ?, LastName = ?, FavoriteTeam = ? WHERE ID = ?',
            [firstName, lastName, favoriteTeam, ID]
        );
        return this.query(statement);
    }

    // Leagues
    createLeague(leagueName: string, userID: number, numberTeams: number, typeScoring: string,
        leaguePrivacy: string, maxTrades: number, teamName: string): any {
        const statement = mysql.format(
            `INSERT INTO leagues (Name, Year, MaxTeams,
            TypeScoring, LeaguePrivacy, MaxTrades) VALUES (?, ?, ?, ?, ?, ?)`,
            [leagueName, 2017, numberTeams, typeScoring, leaguePrivacy, maxTrades]);

        const staetment2 = mysql.format(
            `INSERT INTO league_members (LeagueID, UserID, TeamName, Commisioner)
            VALUES ((SELECT ID FROM leagues WHERE Name = ?), ?, ?, 1)`,
            [leagueName, userID, teamName]
        );
        return this.query(statement).then((result) => {
            return this.query(staetment2);
        });
    }

    updateLeague(leagueID: number, year: number, leagueName: string, numberTeams: number,
        typeScoring: string, leaguePrivacy: string, maxTrades: number): any {
        const statement = mysql.format(
            `UPDATE leagues
            SET Name = ?, Year = ?, MaxTeams = ?, TypeScoring = ?, LeaguePrivacy = ?, MaxTrades = ?
            WHERE ID = ?`,
            [leagueName, year, numberTeams, typeScoring, leaguePrivacy, maxTrades, leagueID]);
        return this.query(statement);
    }

    deleteMultpleLeague(leagueID: number[]): any {
        let orStatement = '';
        for (let i = 1; i < leagueID.length; i++) {
            orStatement = orStatement + ' OR LeagueID = ?';
        }
        const statement = mysql.format(
            'DELETE FROM league_members WHERE LeagueID = ?' + orStatement,
            leagueID);
        const statement2 = mysql.format(
            'DELETE FROM league_rosters WHERE LeagueID = ?' + orStatement,
            leagueID);
        const statement3 = mysql.format(
            'DELETE FROM league_schedule WHERE LeagueID = ?' + orStatement,
            leagueID);
        const statement4 = mysql.format(
            'DELETE FROM league_invites WHERE LeagueID = ?' + orStatement,
            leagueID);
        const statement5 = mysql.format(
            'DELETE FROM leagues WHERE ID = ?' + orStatement,
            leagueID);

        console.log(statement);
        console.log(statement2);
        console.log(statement3);
        console.log(statement4);
        console.log(statement5);

        return this.query(statement).then((result => {
            return this.query(statement2).then((result2 => {
                return this.query(statement3).then((result3 => {
                    return this.query(statement4).then((result4 => {
                        return this.query(statement5);
                    }));
                }));
            }));
        }));
    }

    deleteUser(userID: number): any {
        const leagueArray = [];
        const statement = mysql.format(
            'SELECT LeagueID FROM league_members where UserID = ? and Commisioner = 1',
            [userID]);
        const statement2 = mysql.format(
            'DELETE FROM userlogin WHERE ID = ?',
            [userID]);

        return this.query(statement).then((result => {
            if (result.length > 0) {
                result.forEach(el => {
                    console.log(el.LeagueID);
                    leagueArray.push(el.LeagueID);
                });

                return this.deleteMultpleLeague(leagueArray).then((result2 => {
                    return this.query(statement2);
                }));

            } else {
                console.log('User does not own any leagues');
                return this.query(statement2);
            }

        }));
    }

    deleteLeague(leagueID: number): any {
        const statement = mysql.format(
            'DELETE FROM league_members WHERE LeagueID = ?',
            [leagueID]);
        const statement2 = mysql.format(
            'DELETE FROM league_rosters WHERE LeagueID = ?',
            [leagueID]);
        const statement3 = mysql.format(
            'DELETE FROM league_schedule WHERE LeagueID = ?',
            [leagueID]);
        const statement4 = mysql.format(
            'DELETE FROM league_invites WHERE LeagueID = ?',
            [leagueID]);
        const statement5 = mysql.format(
            'DELETE FROM leagues WHERE ID = ?',
            [leagueID]);
        return this.query(statement).then((result => {
            return this.query(statement2).then((result2 => {
                return this.query(statement3).then((result3 => {
                    return this.query(statement4).then((result4 => {
                        return this.query(statement5);
                    }));
                }));
            }));
        }));
    }

    // Find User
    getUsersToInvite(senderID: number): any {
        const statement = mysql.format(
            'SELECT ID, Username from userinfo WHERE ID != ?',
            [senderID]
        );
        return this.query(statement);
    }

    // Makes sure the user isn't already in one of their leagues that they commision when inviting
    getLeaguesToInvite(senderID: number, inviteeID: number): any {
        const statement = mysql.format(
            `SELECT parsedTable.ID, parsedTable.Name FROM
            (
              SELECT distinct(ID), Name FROM leagues
              JOIN league_members ON league_members.LeagueID = leagues.ID
              WHERE ID NOT IN (Select LeagueID from league_members WHERE UserID = ?)
            ) as parsedTable
            JOIN league_members ON league_members.LeagueID = parsedTable.ID
            WHERE Commisioner = 1 AND UserID = ?`,
            [inviteeID, senderID]
        );
        return this.query(statement);
    }

    sendInvite(senderID: number, recieveID: number, leagueID: number): any {
        let today = '';
        const date = new Date();
        const dd = date.getDate();
        const mm = date.getMonth() + 1;
        const yyyy = date.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        const statement = mysql.format(
            'INSERT INTO league_invites (SenderID, RecieveID, LeagueID, Date) VALUES (?, ?, ?, ?)',
            [senderID, recieveID, leagueID, today]
        );
        return this.query(statement);
    }

    getAllLeagues(): any {
        const statement = mysql.format(
            `SELECT leagues.ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID, Username AS OwnerUserName
            FROM leagues
            LEFT JOIN (
                SELECT LeagueID, COUNT(UserID) AS NumTeams
                FROM league_members
                GROUP BY LeagueID
            ) AS member_count ON member_count.LeagueID = leagues.ID
            LEFT JOIN (
                SELECT LeagueID, UserID AS OwnerID
                FROM league_members
                WHERE Commisioner = TRUE
                GROUP BY LeagueID
            ) AS league_owner ON league_owner.LeagueID = leagues.ID
            LEFT JOIN userinfo ON userinfo.ID = OwnerID`,
            []
        );
        return this.query(statement);
    }

    getAllLeaguesForUser(userID: number): any {
        const statement = mysql.format(
            `SELECT get_league_info.ID, Name, Year, MaxTeams, TeamName,
            TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID, Username AS OwnerUserName
            FROM fantasyfootball18.league_members
            LEFT JOIN (
                SELECT ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID
                FROM leagues
                LEFT JOIN (
                    SELECT LeagueID, COUNT(UserID) AS NumTeams
                    FROM league_members
                    GROUP BY LeagueID
                ) AS member_count ON member_count.LeagueID = ID
                LEFT JOIN (
                    SELECT LeagueID, UserID AS OwnerID
                    FROM league_members
                    WHERE Commisioner = TRUE
                    GROUP BY LeagueID
                ) AS league_owner ON league_owner.LeagueID = ID
            ) AS get_league_info ON league_members.LeagueID = get_league_info.ID
            LEFT JOIN userinfo ON userinfo.ID = OwnerID
            WHERE UserID = ?`,
            [userID]
        );
        return this.query(statement);
    }

    searchUserByName(searchParams: string): any {
        searchParams = '%' + searchParams + '%';
        const statement = mysql.format(
            'SELECT * from userinfo WHERE Username LIKE ?',
            [searchParams]
        );
        return this.query(statement);
    }

    // LeagueInvites
    getAllLeagueInvites(userID: number): any {
        const statement = mysql.format(
            `SELECT SenderID, Username AS SenderUsername, FirstName AS SenderFirstName, LastName AS SenderLastName,
            LeagueID, Name AS LeagueName, Date, datediff(NOW(), Date) AS Age
        FROM league_invites
        JOIN leagues ON league_invites.leagueID = leagues.ID
        JOIN userinfo ON league_invites.SenderID = userinfo.ID
        WHERE RecieveID = ?`,
            [userID]
        );
        return this.query(statement);
    }

    insertUserIntoLeague(recieveID: number, leagueID: number, teamName: string): any {
        const statement = mysql.format(
            'INSERT INTO league_members (LeagueID, UserID, TeamName, Commisioner) VALUES (?, ?, ?, 0)',
            [leagueID, recieveID, teamName]
        );
        const statement2 = mysql.format(
            'DELETE FROM league_invites WHERE RecieveID = ? AND LeagueID = ?',
            [recieveID, leagueID]
        );
        return this.query(statement).then((result) => {
            return this.query(statement2);
        });
    }

    deleteInvite(recieveID: number, leagueID: number): any {
        const statement = mysql.format(
            'DELETE FROM league_invites WHERE RecieveID = ? AND LeagueID = ?',
            [recieveID, leagueID]
        );
        return this.query(statement);
    }

    //  Find League
    getLeagueInfo(leagueID: number): any {
        const statement = mysql.format(
            `SELECT leagues.ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID, UserName AS OwnerUserName
            FROM leagues
            LEFT JOIN (
                SELECT LeagueID, COUNT(UserID) AS NumTeams
                FROM league_members
                GROUP BY LeagueID
            ) AS member_count ON member_count.LeagueID = leagues.ID
            LEFT JOIN (
                SELECT LeagueID, UserID AS OwnerID
                FROM league_members
                WHERE Commisioner = TRUE
                GROUP BY LeagueID
            ) AS league_owner ON league_owner.LeagueID = leagues.ID
            LEFT JOIN userinfo ON userinfo.ID = OwnerID
            WHERE leagues.ID = ?`,
            [leagueID]
        );
        return this.query(statement);
    }

    searchLeaguesByName(searchParams: string): any {
        searchParams = '%' + searchParams + '%';
        const statement = mysql.format(
            `SELECT ID, Name, Year, MaxTeams, TypeScoring, LeaguePrivacy, MaxTrades, NumTeams, OwnerID
            FROM leagues
            LEFT JOIN (
                SELECT LeagueID, COUNT(UserID) AS NumTeams
                FROM league_members
                GROUP BY LeagueID
            ) AS member_count ON member_count.LeagueID = ID
            LEFT JOIN (
                SELECT LeagueID, UserID AS OwnerID
                FROM league_members
                WHERE Commisioner = TRUE
                GROUP BY LeagueID
            ) AS league_owner ON league_owner.LeagueID = ID
            WHERE Name LIKE ?`,
            [searchParams]
        );
        return this.query(statement);
    }

    getLeagueMembers(leagueID: number): any {
        const statement = mysql.format(
            `SELECT UserID, Username, TeamName, Commisioner
            FROM league_members
            JOIN userinfo ON UserID = userinfo.ID
            WHERE LeagueID = ?;`,
            [leagueID]
        );
        return this.query(statement);
    }

    getLeagueSchedule(leagueID: number, week?: number): any {
        const params = [leagueID];
        if (week) { params.push(week); }
        const statement = mysql.format(
            `SELECT Week, Player1ID, Player2ID
            FROM league_schedule
            WHERE LeagueID = ?
            AND Week` + (week ? ' = ?' : '') + ';',
            params
        );
        return this.query(statement);
    }

    getLeagueRosters(leagueID: number): any {
        const statement = mysql.format(
            `SELECT UserID, PlayerName, PlayerPos, TeamAbbr
            FROM league_rosters
            JOIN nfl_players ON league_rosters.PlayerID = nfl_players.player_id
            WHERE LeagueID = ?;`,
            [leagueID]
        );
        return this.query(statement);
    }

    getRoster(leagueID: number, userID: number): any {
        const statement = mysql.format(
            `SELECT PlayerName, PlayerPos, TeamAbbr, Active
            FROM league_rosters
            JOIN nfl_players ON league_rosters.PlayerID = nfl_players.player_id
            WHERE LeagueID = ?
            AND UserID = ?;`,
            [leagueID, userID]
        );
        return this.query(statement);
    }

    getUserInfoById(userID: number): any {
        const statement = mysql.format(
            'SELECT * FROM userinfo WHERE ID = ?',
            [userID]
        );
        return this.query(statement);
    }

    getUserInfoByUsername(userName: string): any {
        const statement = mysql.format(
            'SELECT * FROM userinfo WHERE Username = ?',
            [userName]
        );
        return this.query(statement);
    }

    getUserLoginInfo(userEmail: string): any {
        const statement = mysql.format(
            'SELECT * FROM userlogin where Email = ?',
            [userEmail]
        );
        return this.query(statement);
    }

    getUserRecord(userID: number, leagueID: number): any {
        const statement = mysql.format(
            `SELECT
            COUNT(IF((Player1ID = ? AND player1_score > player2_score) OR (Player2ID = ? AND player2_score > player1_score),1,NULL)) AS wins,
            COUNT(IF((Player1ID = ? AND player1_score < player2_score) OR (Player2ID = ? AND player2_score < player1_score),1,NULL)) AS losses,
            COUNT(IF((Player1ID = ? AND player1_score = player2_score) OR (Player2ID = ? AND player2_score = player1_score),1,NULL)) AS ties
            FROM league_schedule
            LEFT JOIN (
                SELECT LeagueID, UserID, Year, Week, SUM(WeekPts) AS player1_score
                FROM league_rosters
                JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID
                WHERE Active = 1
                GROUP BY LeagueID, UserID, Year, Week
            ) AS p1_scores
            ON (p1_scores.UserID = league_schedule.Player1ID)
                AND (p1_scores.Week = league_schedule.Week)
            LEFT JOIN (
                SELECT LeagueID, UserID, Year, Week, SUM(WeekPts) AS player2_score
                FROM league_rosters
                JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID
                WHERE Active = 1
                GROUP BY LeagueID, UserID, Year, Week
            ) AS p2_scores
            ON (p2_scores.UserID = league_schedule.Player2ID)
                AND (p2_scores.Week = league_schedule.Week)
            WHERE league_schedule.LeagueID = ?
            AND p1_scores.Year = (SELECT Year FROM leagues WHERE ID = ?)
            AND p2_scores.Year = (SELECT Year FROM leagues WHERE ID = ?)`,
            [userID, userID, userID, userID, userID, userID, leagueID, leagueID, leagueID]
        );
        return this.query(statement);
    }

    getUserScore(leagueID: number, userID?: number, week?: number): number {
        const params = [leagueID];
        if (userID) { params.push(userID); }
        if (week) { params.push(week); }
        params.push(leagueID);
        const statement = mysql.format(
            `SELECT league_rosters.UserID, Username, TeamName, week as Week, SUM(WeekPts) AS score
            FROM league_rosters
            JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID
            JOIN userinfo ON league_rosters.UserID = userinfo.ID
            JOIN league_members ON league_rosters.UserID = league_members.UserID
            WHERE league_rosters.LeagueID = ?
                AND league_rosters.UserID ` + (userID ? '= ?' : '') + `
                AND week ` + (week ? '= ?' : '') + `
                AND year = (SELECT year FROM leagues WHERE id = ?)
                AND Active = 1
            GROUP BY league_rosters.LeagueID, league_rosters.UserID, year, week;`,
            params
        );
        return this.query(statement);
    }

    getUserRoster(userID: number, leagueID: number, week: number): any {
        const statement = mysql.format(
            `SELECT PlayerName, PlayerPos, TeamAbbr, SeasonPts, WeekPts, Active
            FROM league_rosters
            JOIN nfl_players ON league_rosters.PlayerID = nfl_players.player_id
            JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID
            WHERE UserID = ? AND LeagueID = ? AND Year = 2017 AND Week = ?`,
            [userID, leagueID, week]
        );
        return this.query(statement);
    }

    getUserSchedule(userID: number, leagueID: number): any {
        const statement = mysql.format(
            `SELECT week, Player1ID, Player2ID
            FROM league_schedule
            WHERE (Player1ID = ? OR Player2ID = ?) AND LeagueID = ?;`,
            [userID, userID, leagueID]
        );
        return this.query(statement);
    }

    getUsername(userID: number): string {
        const statement = mysql.format(
            `SELECT Username FROM userinfo WHERE ID = ?`,
            [userID]
        );
        return this.query(statement)['Username'];
    }

    getPlayerInfo(playerID: number): any {
        const statement = mysql.format(
            `SELECT PlayerName, PlayerPos, TeamAbbr
            FROM nfl_players
            WHERE player_id = ?;`,
            [playerID]
        );
        return this.query(statement);
    }

    getPlayerStats(playerID: number, year: number, week: number): any {
        const statement = mysql.format(
            `SELECT *
            FROM nfl_stats
            WHERE PlayerID = ?
            AND year = ?
            AND week = ?;`,
            [playerID, year, week]
        );
        return this.query(statement);
    }

    // Luke Stats
    getStats(): any {
        const statement = mysql.format(
            `SELECT PlayerName, PlayerPos, TeamAbbr, SeasonPts, Name, GameStatValue FROM game_stats_totals
            INNER JOIN game_stats_numbers ON game_stats_totals.StatID = game_stats_numbers.ID
            INNER JOIN nfl_players ON nfl_players.player_id = game_stats_totals.PlayerID
            JOIN (
              SELECT DISTINCT(PlayerID), SeasonPts
                FROM nfl_stats
                WHERE Year = 2017
            ) AS temp ON temp.PlayerID = game_stats_totals.PlayerID
            ORDER BY SeasonPts desc, PlayerName desc`,
            []
        );
        return this.query2(statement);
    }

    getSeasonPoints(): any {
        const statement = mysql.format(
            `SELECT PlayerName, SeasonPts, PlayerPos, TeamAbbr FROM game_stats_totals
        LEFT JOIN nfl_stats ON game_stats_totals.PlayerID = nfl_stats.PlayerID
        LEFT JOIN nfl_players ON game_stats_totals.PlayerID = nfl_players.player_id
        WHERE Year = 2017
        GROUP BY PlayerName`,
            []
        );
        return this.query(statement);
    }

    getRequestsForLeague(leagueID: number): any {
        const statement = mysql.format(
          `SELECT SenderID, Username, LeagueID, TeamName FROM league_request
          INNER JOIN userinfo ON league_request.SenderID = userinfo.ID
          WHERE LeagueID = ?`,
          [leagueID]);

        return this.query(statement);
      }

      requestInvite(senderID: number, leagueID: number, teamName: string): any {
          const statement = mysql.format(
            `INSERT INTO league_request (SenderID, LeagueID, TeamName) VALUES (?, ?, ?)`,
            [senderID, leagueID, teamName]
          );
          return this.query(statement);
      }

      acceptRequestToLeague(senderID: number, leagueID: number, teamName: string): any {
        const statement = mysql.format(
          'INSERT INTO league_members (LeagueID, UserID, TeamName, Commisioner) VALUES (?, ?, ?, 0)',
          [leagueID, senderID, teamName]);
        const statement2 = mysql.format(
          `DELETE FROM league_request WHERE SenderID = ? AND LeagueID = ?`,
          [senderID, leagueID]);

          return this.query(statement).then((result) => {
            return this.query(statement2);
        });
      }

      joinLeague(senderID: number, leagueID: number, teamName: string): any {
        const statement = mysql.format(
          'INSERT INTO league_members (LeagueID, UserID, TeamName, Commisioner) VALUES (?, ?, ?, 0)',
          [leagueID, senderID, teamName]);

          return this.query(statement);
      }

      deleteRequestToLeague(senderID: number, leagueID: number): any {
        const statement = mysql.format(
          `DELETE FROM league_request WHERE SenderID = ? and LeagueID = ?`,
          [senderID, leagueID]);

        return this.query(statement);
      }

    private generateLeagueSchedule(leagueID: number): void {
        const statement = mysql.format(
            `SELECT UserID
            FROM league_members
            WHERE LeagueID = ?`,
            [leagueID]
        );
        return this.query(statement).then((result) => {
            let users = [];
            for (let user of result) {
                users.push(user.UserID);
            }
            for (let i = 0; i < users.length; i++) {
                // choose a random not-yet-placed item to place there
                // must be an item AFTER the current item, because the stuff
                // before has all already been
                let randomChoiceIndex;
                do {
                    randomChoiceIndex = Math.floor(Math.random() * (users.length - 0)) + 0;
                } while (randomChoiceIndex === i);
                // place our random choice in the spot by swapping
                [users[i], users[randomChoiceIndex]] = [users[randomChoiceIndex], users[i]];
            }
            console.log(users);
            let schedule = [];
            if (users.length % 2 !== 0) {
                users.push(-1);
            }
            let last = users[users.length - 1];
            let previousRound = [];
            for (let i = 0; i < users.length / 2; i++) {
                previousRound.push(users[i]);
                previousRound.push(users[users.length - i - 1]);
                schedule.push({week: 1, player1: users[i], player2: users[users.length - i - 1]});
            }
            const weeks = 13;
            for (let i = 2; i <= weeks; i++) {
                let currentRound = [];
                const lastFromPreviousRound = previousRound.pop();
                previousRound.splice(previousRound.findIndex((value: any) => { return value === last; }), 1);
                schedule.push({week: i, player1: last, player2: lastFromPreviousRound});
                currentRound.push(last);
                currentRound.push(lastFromPreviousRound);
                for (let j = previousRound.length - 1; j > 0; j -= 2) {
                    const a = previousRound[j - 1];
                    const b = previousRound[j];
                    currentRound.push(a);
                    currentRound.push(b);
                    schedule.push({week: i, player1: a, player2: b});
                }
                previousRound = currentRound;
            }
            let inserts = '';
            let insertValues = [];
            for (let i = 0; i < schedule.length; i++) {
                inserts += '(?,?,?,?)';
                if (i !== schedule.length - 1) {
                    inserts += ',';
                }
                insertValues.push(leagueID);
                insertValues.push(schedule[i]['week']);
                insertValues.push(schedule[i]['player1']);
                insertValues.push(schedule[i]['player2']);
            }
            const statement2 = mysql.format(
                `INSERT INTO league_schedule
                VALUES ` + inserts,
                insertValues
            );
            console.log(statement2);
            this.query(statement2);
        });
    }

    private randomDraft(leagueID: number): void {
        let rosters = [];
        let statement = mysql.format(
            `SELECT UserID
            FROM league_members
            WHERE LeagueID = ?`,
            [leagueID]
        );
        return this.query(statement).then((result) => {
            let users = [];
            for (let user of result) {
                users.push(user.UserID);
                rosters.push([]);
            }
            const positions = ['QB', 'RB', 'RB', 'WR', 'WR', 'TE', 'FLEX', 'DEF', 'K'];
            const bench = 6;

            let p = new Promise(resolve => {
                resolve();
            });
            for (let round = 0; round < 15; round++) {
                p = p.then(_ => new Promise(resolve => {
                    // randomize draft order
                    for (let i = 0; i < users.length; i++) {
                        let randomChoiceIndex;
                        do {
                            randomChoiceIndex = Math.floor(Math.random() * (users.length - 0)) + 0;
                        } while (randomChoiceIndex === i);
                        [users[i], users[randomChoiceIndex]] = [users[randomChoiceIndex], users[i]];
                    }
                    if (round < positions.length) {
                        const pos = positions[round];
                        if (pos === 'FLEX') {
                            statement = mysql.format(
                                `SELECT DISTINCT(PlayerID), PlayerName, PlayerPos, TeamAbbr
                                FROM nfl_stats
                                JOIN nfl_players ON nfl_stats.PlayerID = nfl_players.player_id
                                WHERE PlayerPos IN ('RB', 'WR', 'TE')
                                AND PlayerID NOT IN
                                (
                                    SELECT PlayerID
                                    FROM league_rosters
                                    WHERE LeagueID = ?
                                )
                                AND Year = (
                                    SELECT Year
                                    FROM leagues
                                    WHERE ID = ?
                                )
                                ORDER BY SeasonPts DESC
                                LIMIT ?`,
                                [leagueID, leagueID, users.length]
                            );
                        } else {
                            statement = mysql.format(
                                `SELECT DISTINCT(PlayerID), PlayerName, PlayerPos, TeamAbbr
                                FROM nfl_stats
                                JOIN nfl_players ON nfl_stats.PlayerID = nfl_players.player_id
                                WHERE PlayerPos = ?
                                AND PlayerID NOT IN
                                (
                                    SELECT PlayerID
                                    FROM league_rosters
                                    WHERE LeagueID = ?
                                )
                                AND Year = (
                                    SELECT Year
                                    FROM leagues
                                    WHERE ID = ?
                                )
                                ORDER BY SeasonPts DESC
                                LIMIT ?`,
                                [pos, leagueID, leagueID, users.length]
                            );
                        }
                    } else {
                        statement = mysql.format(
                            `SELECT DISTINCT(PlayerID), PlayerName, PlayerPos, TeamAbbr
                            FROM nfl_stats
                            JOIN nfl_players ON nfl_stats.PlayerID = nfl_players.player_id
                            AND PlayerID NOT IN
                            (
                                SELECT PlayerID
                                FROM league_rosters
                                WHERE LeagueID = ?
                            )
                            AND Year = (
                                SELECT Year
                                FROM leagues
                                WHERE ID = ?
                            )
                            ORDER BY SeasonPts DESC
                            LIMIT ?`,
                            [leagueID, leagueID, users.length]
                        );
                    }

                    this.query(statement).then((result2) => {
                        let inserts = '';
                        let insertValues = [];
                        for (let i = 0; i < users.length; i++) {
                            insertValues.push(leagueID);
                            insertValues.push(result2[i]['PlayerID']);
                            insertValues.push(users[i]);
                            if (round < positions.length) {
                                insertValues.push(1)
                            } else {
                                insertValues.push(0)
                            }
                            inserts += '(?,?,?,?)';
                            if (i !== users.length - 1) {
                                inserts += ',';
                            }
                        }
                        const statement3 = mysql.format(
                            `INSERT INTO league_rosters
                            VALUES ` + inserts,
                            insertValues
                        );

                        this.query(statement3).then((result3) => {
                            resolve();
                        });
                    });
                }));
            }
        });
    }

    userLeaveLeague(userID: number, leagueID: number): any {
      const statement = mysql.format(
        `DELETE FROM league_members WHERE LeagueID = ? AND UserID = ?`,
        [leagueID, userID]);
      const statement2 = mysql.format(
        `DELETE FROM league_rosters WHERE LeagueID = ? AND UserID = ?`,
       [leagueID, userID]);
      const statement3 = mysql.format(
        `DELETE FROM league_schedule WHERE (Player1ID = ? OR Player2ID = ?) AND LeagueID = ?`,
        [userID, userID, leagueID]
      );


        return this.query(statement).then((result) => {
          return this.query(statement2).then((result2) => {
            return this.query(statement3);
          });
        });
    }


}
