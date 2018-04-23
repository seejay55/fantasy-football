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
        leaguePrivacy: string, maxTrades: number): any {
        const statement = mysql.format(
            `INSERT INTO leagues (Name, Year, MaxTeams,
            TypeScoring, LeaguePrivacy, MaxTrades) VALUES (?, ?, ?, ?, ?, ?)`,
            [leagueName, 2017, numberTeams, typeScoring, leaguePrivacy, maxTrades]);

        const staetment2 = mysql.format(
            `INSERT INTO league_members (LeagueID, UserID, TeamName, Commisioner)
            VALUES ((SELECT ID FROM leagues WHERE Name = ?), ?, ?, 1)`,
            [leagueName, userID, leagueName]
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
            [leagueName, 2017, numberTeams, typeScoring, leaguePrivacy, maxTrades, leagueID]);
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
            `SELECT get_league_info.ID, Name, Year, MaxTeams,
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
            `SELECT PlayerName, PlayerPos, TeamAbbr
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
            COUNT(IF((Player1ID = ? AND player1_score > player2_score)
                OR (Player2ID = ? AND player2_score > player1_score),1,NULL)) AS Wins,
            COUNT(IF((Player1ID = ? AND player1_score < player2_score)
                OR (Player2ID = ? AND player2_score < player1_score),1,NULL)) AS Losses,
            COUNT(IF((Player1ID = ? AND player1_score = player2_score)
                OR (Player2ID = ? AND player2_score = player1_score),1,NULL)) AS Ties
            FROM league_schedule
            JOIN (
                SELECT LeagueID, UserID, year, week, SUM(WeekPts) AS player1_score
                FROM league_rosters
                JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID
                GROUP BY LeagueID, UserID, year, week
            ) AS p1_scores
            ON (p1_scores.UserID = league_schedule.Player1ID)
                AND (p1_scores.week = league_schedule.week)
            JOIN (
                SELECT LeagueID, UserID, year, week, SUM(WeekPts) AS player2_score
                FROM league_rosters
                JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID
                GROUP BY LeagueID, UserID, year, week
            ) AS p2_scores
            ON (p2_scores.UserID = league_schedule.Player2ID)
                AND (p2_scores.week = league_schedule.week)
            WHERE (Player1ID = ? OR Player2ID = ?)
            AND league_schedule.LeagueID = ?;`,
            [userID, userID, userID, userID, userID, userID, userID, userID, leagueID]
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
        `SELECT SenderID, Username, LeagueID FROM league_request
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

    deleteRequestToLeague(senderID: number, leagueID: number): any {
      const statement = mysql.format(
        `DELETE FROM league_request WHERE SenderID = ? and LeagueID = ?`,
        [senderID, leagueID]);

      return this.query(statement);
    }


}
