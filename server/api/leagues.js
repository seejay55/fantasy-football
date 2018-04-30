var express = require('express')
var router = express.Router()

router.get("/search", function (req, res) {
    var query = "";
    if (req.query.query != undefined) {
        query = req.query.query;
    }
    db.searchLeaguesByName(query).then(function (result) {
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    });
});

router.get("/", function (req, res) {
    db.getAllLeagues().then(function (result) {
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    });
});

router.post("/", function (req, res) {
    league_name = req.body.LeagueName;
    owner_id = req.body.UserID;
    privacy = req.body.LeaguePrivacy;
    max_trades = req.body.MaxTrades;
    max_teams = req.body.MaxTeams;
    team_name = req.body.TeamName;
    db.createLeague(league_name, owner_id, max_teams, "Default", privacy, max_trades, team_name).then(function (result) {
        res.status(204).send();
    });
});

module.exports = function (_db) {
    db = _db;
    return router;
}