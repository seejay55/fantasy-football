import * as mysql from 'mysql';
import { MysqlError } from 'mysql';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { PARAMETERS } from '@angular/core/src/util/decorators';

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
                    reject('DB Error(Conn):\n' + conError);
                }
                con.query(statement, (error: MysqlError, result: any) => {
                    if (error) {
                        reject('DB Error(Query):\n' + error);
                    }
                    queryResult = JSON.parse(JSON.stringify(result));
                    resolve(queryResult);

                }).on('end', () => {
                    con.release();
                });
            });
        });
    }

    private commandQuery(statement: string, insert: any): any {
      let queryResult: any;
      return new Promise((resolve, reject) => {
        this.pool.getConnection((conError: MysqlError, con: mysql.PoolConnection) => {
              if (conError) {
                 reject('DB Error(Conn):\n' + conError);
                }
              con.query(statement, insert, (error: MysqlError, result: any) => {
                  if (error) {
                      reject('DB Error(Query):\n' + error);
                    }
                    queryResult = console.log('Command compelete');
                    resolve(queryResult);

              }).on('end', () => {
                  con.release();
              });
          });
        }).catch(e => {
            console.log(e);
        });
    }

    // Users
    getAllUsers(): any {
        const statement =
        'SELECT * FROM userinfo';
        return this.query(statement);
    }

    insertUser(userEmail: string, userPassword: string, username: string) {
        const userLogin = [ [userEmail, userPassword] ];
        const userInfo = [username];
        const insertLogin = 'INSERT INTO userlogin (Email, Password) VALUES (?)';
        const insertUsername = 'INSERT INTO userinfo (ID, Username) VALUES ((Select ID from userlogin order by ID desc limit 0,1), ?)';
        this.commandQuery(insertLogin, userLogin).then(() => {
          this.commandQuery(insertUsername, userInfo);
        });
    }

    updateUser(ID: number, userName: string, userPassword: string) {
        const updateLogin = 'UPDATE userlogin SET Password = ? WHERE ID = ?';
        const updateInfo = 'UPDATE userinfo SET Username = ? WHERE ID = ?';
        this.commandQuery(updateLogin, [userPassword, ID]);
        this.commandQuery(updateInfo, [userName, ID]);
    }

    updateUserPersonal(ID: number, firstName: string, lastName: string, favoriteTeam: string) {
      const updatePersonal = 'UPDATE userinfo SET FirstName = ?, LastName = ?, FavoriteTeam = ? WHERE ID = ?';
      this.commandQuery(updatePersonal, [firstName, lastName, favoriteTeam, ID]);
    }

    deleteUser(ID: number) {
      const statement = 'DELETE FROM userlogin WHERE ID = ?';
      this.commandQuery(statement, ID);
    }

    getLeagueInfo(leagueID: number): any {
        const statement = mysql.format(
            'SELECT * FROM leagues WHERE id = ?',
            [leagueID]
        );
        return this.query(statement);
    }

    getLeagueMembers(leagueID: number): any {
        const statement = mysql.format(
            `SELECT Username, TeamName, Commisioner
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
            `SELECT PlayerName, PlayerPos, TeamAbbr
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

    getUserInfo(userID: number): any {
        const statement = mysql.format(
            'SELECT * FROM userinfo WHERE ID = ?',
            [userID]
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
                OR (Player2ID = ? AND player2_score > player1_score),1,NULL)) AS wins,
            COUNT(IF((Player1ID = ? AND player1_score < player2_score)
                OR (Player2ID = ? AND player2_score < player1_score),1,NULL)) AS losses,
            COUNT(IF((Player1ID = ? AND player1_score = player2_score)
                OR (Player2ID = ? AND player2_score = player1_score),1,NULL)) AS ties
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

    getUserScore(userID: number, leagueID: number, week?: number): number {
        const params = [userID, leagueID];
        if (week) { params.push(week); }
        params.push(leagueID);
        const statement = mysql.format(
            `SELECT SUM(WeekPts) AS score
            FROM league_rosters
            JOIN nfl_stats ON league_rosters.PlayerID = nfl_stats.PlayerID
            WHERE UserID = ?
                AND LeagueID = ?
                AND week ` + (week ? '= ?' : '') + `
                AND year = (SELECT year FROM leagues WHERE id = ?)
            GROUP BY LeagueID, UserID, year, week;`,
            params
        );
        return this.query(statement);
    }

    getUserRoster(userID: number, leagueID: number): any {
        const statement = mysql.format(
            `SELECT PlayerName, PlayerPos, TeamAbbr
            FROM league_rosters
            JOIN nfl_players ON league_rosters.PlayerID = nfl_players.player_id
            WHERE UserID = ? AND LeagueID = ?;`,
            [userID, leagueID]
        );
        return this.query(statement);
    }

    getUserSchedule(userID: number, leagueID: number): any {
        const statement = mysql.format(
            `SELECT week, Player1ID, Player2ID
            FROM league_schedule
            WHERE (Player1ID = 1 OR Player2ID = 1) AND LeagueID = 1;`,
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
}
