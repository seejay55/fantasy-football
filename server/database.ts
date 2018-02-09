import * as mysql from 'mysql';
import { MysqlError } from 'mysql';
import { resetFakeAsyncZone } from '@angular/core/testing';

export class DB {
    private pool: mysql.Pool;

    constructor(address: string, user: string, pass: string) {
        this.pool = mysql.createPool({
            host: address,
            user: user,
            password: pass,
            connectionLimit: 10,
            database: 'fantasyfootball18'
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
            'SELECT * FROM ?? WHERE ?? = ?',
            ['leagues', 'id', leagueID]
        );
        return this.query(statement);
    }

    getLeagueMembers(leagueID: number): any {
        const statement = mysql.format(
            'SELECT * FROM ?? WHERE ?? = ?',
            ['league_members', 'league_id', leagueID]
        );
        return this.query(statement);
    }

    getUserInfo(userID: number): any {
        const statement = mysql.format(
            'SELECT * FROM ?? WHERE ?? = ?',
            ['userinfo', 'id', userID]
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
        const result = this.query(statement);
        return [result['wins'], result['losses'], result['ties']];
    }

    getUserScore(userID: number, leagueID: number, week: number): number {
        const statement = mysql.format(
            `SELECT SUM(week_pts) AS score
            FROM league_rosters
            JOIN nfl_stats ON league_rosters.player_id = nfl_stats.player_id
            WHERE user_id = ? AND league_id = ? AND week = ?
            GROUP BY league_id, user_id, year, week;`,
            [userID, leagueID, week]
        );
        return this.query(statement)['score'];
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
