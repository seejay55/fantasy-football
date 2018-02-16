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

    getLeagueInfo(leagueID: number): any {
        const statement = mysql.format(
            'SELECT * FROM leagues WHERE id = ?',
            [leagueID]
        );
        return this.query(statement);
    }

    getLeagueMembers(leagueID: number): any {
        const statement = mysql.format(
            `SELECT Username, team_name, commisioner
            FROM league_members
            JOIN userinfo ON user_id = userinfo.ID
            WHERE league_id = ?;`,
            [leagueID]
        );
        return this.query(statement);
    }

    getLeagueSchedule(leagueID: number, week?: number): any {
        const params = [leagueID];
        if (week) { params.push(week); }
        const statement = mysql.format(
            `SELECT week, player1_id, player2_id
            FROM league_schedule
            WHERE league_id = ?
            AND week` + (week ? ' = ?' : '') + ';',
            params
        );
        return this.query(statement);
    }

    getLeagueRosters(leagueID: number): any {
        const statement = mysql.format(
            `SELECT player_name, player_pos, team_abbr
            FROM league_rosters
            JOIN nfl_players ON league_rosters.player_id = nfl_players.player_id
            WHERE league_id = ?;`,
            [leagueID]
        );
        return this.query(statement);
    }

    getRoster(leagueID: number, userID: number): any {
        const statement = mysql.format(
            `SELECT player_name, player_pos, team_abbr
            FROM league_rosters
            JOIN nfl_players ON league_rosters.player_id = nfl_players.player_id
            WHERE league_id = ?
            AND user_id = ?;`,
            [leagueID, userID]
        );
        return this.query(statement);
    }

    getUserInfo(userID: number): any {
        const statement = mysql.format(
            'SELECT * FROM userinfo WHERE id = ?',
            [userID]
        );
        return this.query(statement);
    }

    getUserRecord(userID: number, leagueID: number): any {
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
            [userID, userID, userID, userID, userID, userID, userID, userID, leagueID]
        );
        return this.query(statement);
    }

    getUserScore(userID: number, leagueID: number, week?: number): number {
        const params = [userID, leagueID];
        if (week) { params.push(week); }
        params.push(leagueID);
        const statement = mysql.format(
            `SELECT SUM(week_pts) AS score
            FROM league_rosters
            JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id
            WHERE user_id = ?
                AND league_id = ?
                AND week ` + (week ? '= ?' : '') + `
                AND year = (SELECT year FROM leagues WHERE id = ?)
            GROUP BY league_id, user_id, year, week;`,
            params
        );
        return this.query(statement);
    }

    getUserRoster(userID: number, leagueID: number): any {
        const statement = mysql.format(
            `SELECT player_name, player_pos, team_abbr
            FROM league_rosters
            JOIN nfl_players ON league_rosters.player_id = nfl_players.player_id
            WHERE user_id = ? AND league_id = ?;`,
            [userID, leagueID]
        );
        return this.query(statement);
    }

    getUserSchedule(userID: number, leagueID: number): any {
        const statement = mysql.format(
            `SELECT week, player1_id, player2_id
            FROM league_schedule
            WHERE (player1_id = 1 OR player2_id = 1) AND league_id = 1;`,
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
            `SELECT player_name, player_pos, team_abbr
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
            WHERE player_id = ?
            AND year = ?
            AND week = ?;`,
            [playerID, year, week]
        );
        return this.query(statement);
    }
}
