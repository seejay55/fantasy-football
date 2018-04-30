var express = require('express')
var router = express.Router()

router.patch("/:league_id", function (req, res) {
    var league_id = req.params.league_id;
    var year = req.body.Year;
    var leagueName = req.body.LeagueName;
    var numberTeams = req.body.NumberTeams;
    var typeScoring = req.body.TypeScoring;
    var leaguePrivacy = req.body.LeaguePrivacy;
    var maxTrades = req.body.MaxTrades;

    db.updateLeague(league_id, year, leagueName, numberTeams, typeScoring,
        leaguePrivacy, maxTrades).then(function (result) {
            res.status(200).send();
        });

});

router.delete("/:league_id", function (req, res) {
    var leagueID = req.params.league_id;
    db.deleteLeague(leagueID).then(function (result) {
        res.status(204).send();
    });
});

router.get("/:league_id/members", function (req, res) {
    var league_id = req.params.league_id;
    db.getLeagueMembers(league_id).then(function (result) {
        res.send(result);
    });
});

router.get("/:league_id/rosters", function (req, res) {
    var league_id = req.params.league_id;
    db.getLeagueRosters(league_id).then(function (result) {
        res.send(result);
    });
});

router.get("/:league_id/roster/:user_id", function (req, res) {
    var league_id = req.params.league_id;
    var user_id = req.params.user_id;
    db.getRoster(league_id, user_id).then(function (result) {
        res.send(result);
    });
});

router.get("/:league_id/schedule", function (req, res) {
    var league_id = req.params.league_id;
    var week = null;
    if (req.query.week != undefined) {
        week = req.query.week;
    }
    db.getLeagueSchedule(league_id, week).then(function (result) {
        res.send(result);
    });
});

router.get("/:league_id/record/:user_id", function (req, res) {
    var league_id = req.params.league_id;
    var user_id = req.params.user_id;
    db.getUserRecord(user_id, league_id).then(function (result) {
        res.send(result);
    });
});

router.get("/:league_id", function (req, res) {
    var league_id = req.params.league_id;
    db.getLeagueInfo(league_id).then(function (result) {
        if (result.length) {
            res.send(result);
        } else { res.status(404).send('League not found.'); }
    });
});

router.get("/:league_id/scores", function (req, res) {
    var league_id = req.params.league_id;
    var user_id = null;
    var week = null;
    if (req.query.user != undefined) {
        user_id = req.query.user;
    }
    if (req.query.week != undefined) {
        week = req.query.week;
    }
    db.getUserScore(league_id, user_id, week).then(function (result) {
        res.send(result);
    });
});

router.get("/:leagueID/requests", function (req, res) {
    var league_ID = req.params.leagueID;

    db.getRequestsForLeague(league_ID).then(function (result) {
        res.send(result);
    });
});

router.post("/requestInvite", function (req, res) {
    var senderID = req.body.SenderID;
    var leagueID = req.body.LeagueID;
    var teamName = req.body.TeamName;

    db.requestInvite(senderID, leagueID, teamName).then(function (result) {
        res.send(result);
    });
});

router.post("/acceptRequest", function (req, res) {
    var senderID = req.body.SenderID;
    var leagueID = req.body.LeagueID;
    var teamName = req.body.TeamName;
    db.acceptRequestToLeague(senderID, leagueID, teamName).then(function (result) {
        if (result == undefined) {
            res.status(500).send("Error Accepting Invite");
        } else {
            res.status(200).send();
        }
    });
});

router.delete("/:leagueID/user/:senderID/deleteRequest", function (req, res) {
    var leagueID = req.params.leagueID;
    var senderID = req.params.senderID;

    db.deleteRequestToLeague(senderID, leagueID).then(function (result) {
        if (result == undefined) {
            res.status(500).send("Error Deleting Invite");
        } else {
            res.status(200).send();
        }
    });
});

router.post("/joinLeague", function (req, res) {
    var senderID = req.body.SenderID;
    var leagueID = req.body.LeagueID;
    var teamName = req.body.TeamName;
    db.joinLeague(senderID, leagueID, teamName).then(function (result) {
        if (result == undefined) {
            res.status(500).send("Error Joining League");
        } else {
            res.status(200).send();
        }
    });
});

module.exports = function (_db) {
    db = _db;
    return router;
}