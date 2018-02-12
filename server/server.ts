import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as config from '../config/config.js';
import { DB } from './database';

const db_host = config.db_host;
const db_user = config.db_user;
const db_password = config.db_password;
const db_database = config.db_database;

const db = new DB(db_host, db_user, db_password, db_database);

const app = express();
app.use(bodyParser.json());
app.use(cors());

const server = app.listen(8000, function() {
    console.log('Server listening on port 8000');
});

app.get('/api/league/:league_id/schedule/:week', function (req, res) {
    const league_id = req.params.league_id;
    const week = req.params.week;
    db.getLeagueSchedule(league_id, week).then(function (result) {
        res.send(result);
    });
});

app.get('/api/league/:league_id/schedule', function (req, res) {
    const league_id = req.params.league_id;
    db.getLeagueSchedule(league_id, null).then(function (result) {
        res.send(result);
    });
});

app.get('/api/league/:league_id/rosters/:user_id', function (req, res) {
    const league_id = req.params.league_id;
    const user_id = req.params.user_id;
    db.getRoster(league_id, user_id).then(function (result) {
        res.send(result);
    });
});

app.get('/api/league/:league_id/rosters', function (req, res) {
    const league_id = req.params.league_id;
    db.getLeagueRosters(league_id).then(function (result) {
        res.send(result);
    });
});

app.get('/api/league/:league_id', function (req, res) {
    const league_id = req.params.league_id;
    db.getLeagueInfo(league_id).then(function (result) {
        res.send(result);
    });
});

app.get('/api/league/:league_id/members', function (req, res) {
    const league_id = req.params.league_id;
    db.getLeagueMembers(league_id).then(function (result) {
        res.send(result);
    });
});

app.get('/api/user/:user_id', function (req, res) {
    const user_id = req.params.user_id;
    db.getUserInfo(user_id).then(function (result) {
        res.send(result);
    });
});

app.get('/api/league/:league_id/records/user/:user_id', function (req, res) {
    const league_id = req.params.league_id;
    const user_id = req.params.user_id;
    db.getUserRecord(user_id, league_id).then(function (result) {
        res.send(result);
    });
});

app.get('/api/scores/league=:league_id&user=:user_id&week=:week', function (req, res) {
    const league_id = req.params.league_id;
    const user_id = req.params.user_id;
    const week = req.params.week;
    db.getUserScore(user_id, league_id, week).then(function (result) {
        res.send(result);
    });
});

app.get('/api/scores/league=:league_id&user=:user_id', function (req, res) {
    const league_id = req.params.league_id;
    const user_id = req.params.user_id;
    db.getUserScore(user_id, league_id, null).then(function (result) {
        res.send(result);
    });
});