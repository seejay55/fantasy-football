import * as mysql from 'mysql';
import { MysqlError } from 'mysql';

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

    query(statement: string, callback: (error: MysqlError, results?: any, fields?: mysql.FieldInfo[]) => void) {
        this.pool.getConnection((conError: MysqlError, con: mysql.PoolConnection) => {
            if (conError) {
                console.log('DB Error(Conn):\n' + conError);
            } else {
                con.query(statement, callback).on('end', () => {
                    con.release();
                });
            }
        });
    }
    /*

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
        return this.query(statement);
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
    */
}
