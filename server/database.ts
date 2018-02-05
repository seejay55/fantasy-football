import * as mysql from 'mysql';
import { MysqlError } from 'mysql';

class DB {
    private con: mysql.Connection;

    constructor(address: string, user: string, pass: string) {
        this.con = mysql.createConnection({host: address, user: user, password: pass});
        this.con.connect(function(err: MysqlError) {
            if (err) { throw err; }
            console.log('DB Connected');
        });
    }

    private query(statement: string): any {
        let queryResult: any;
        this.con.connect(function(err) {
            if (err) { throw err; }
            this.con.query(statement, (error: MysqlError, result: any) => { queryResult = result; });
        });
        return queryResult;
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

    getUserRecord(userID: number, leagueID: number): [number, number, number] {
        const statement = mysql.format(
            `SELECT
            COUNT(IF((player1_id = ? AND player1_score > player2_score) OR (player2_id = ? AND player2_score > player1_score),1,NULL)) AS wins, 
            COUNT(IF((player1_id = ? AND player1_score < player2_score) OR (player2_id = ? AND player2_score < player1_score),1,NULL)) AS losses, 
            COUNT(IF((player1_id = ? AND player1_score = player2_score) OR (player2_id = ? AND player2_score = player1_score),1,NULL)) AS ties
            FROM fantasyfootball18.league_schedule
            JOIN (
                SELECT league_id, user_id, year, week, SUM(week_pts) AS player1_score
                FROM fantasyfootball18.league_rosters
                JOIN fantasyfootball18.nfl_stats ON league_rosters.player_id = nfl_stats.player_id
                GROUP BY league_id, user_id, year, week
            ) AS p1_scores
            ON (p1_scores.user_id = league_schedule.player1_id)
                AND (p1_scores.week = league_schedule.week)
            JOIN (
                SELECT league_id, user_id, year, week, SUM(week_pts) AS player2_score
                FROM fantasyfootball18.league_rosters
                JOIN fantasyfootball18.nfl_stats ON league_rosters.player_id = nfl_stats.player_id
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
}
