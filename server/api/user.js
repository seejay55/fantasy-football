var express = require('express')
var router = express.Router()

router.get("/authenticate", function (req, res) {
    var email = req.headers.email;
    db.getUserLoginInfo(email).then(function (result) {
        if (result.length > 0 && req.headers.password === result[0].Password) {
            user_id = result[0].ID;
            db.getUserInfoById(user_id).then(function (result2) {
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    _id: user_id,
                    email: email,
                    userName: result2[0].Username,
                    firstName: result2[0].FirstName,
                    lastName: result2[0].LastName
                });
            });
        } else {
            res.status(500).json('Email or Password is Incorrect');
        }
    });
});

router.get("/:user_id/leagues", function (req, res) {
    var id = req.params.user_id;
    db.getAllLeaguesForUser(id).then(function (result) {
        res.send(result);
    });
});

router.get("/:user", function (req, res) {
    var user = req.params.user;
    var isId = !isNaN(parseInt(user));
    if (isId) {
        db.getUserInfoById(parseInt(user)).then(function (result) {
            if (result.length == 0) {
                res.status(500).send("No user exists with ID: " + user);
            } else {
                res.send(result);
            }
        });
    } else {
        db.getUserInfoByUsername(user).then(function (result) {
            if (result.length == 0) {
                res.status(500).send("No user exists with Username: " + user);
            } else {
                res.send(result);
            }
        });
    }
});

router.patch("/:user_id", function (req, res) {
    var id = req.params.user_id;
    var username = req.body.Username;
    var email = req.body.Email;
    var profilePic = req.body.ProfilePic;
    var password = req.body.Password;
    if (id && username && email) {
        db.updateUser(id, email, username).then(function (result) {
            db.getUserInfoById(id).then(function (result) {
                res.status(200).send(result);
            });
        });
    } else if (password) {
        db.updateUserPassword(password, id).then(function (result) {
            res.status(200).send(result);
        })
    } else {
        res.status(500).send('There was an error updating your account.')
    }
});

router.delete("/:user_id", function (req, res) {
    var id = req.params.user_id;
    db.deleteUser(id).then(function (result) {
        res.status(204).send();
    });
});

router.post("/sendInvite", function (req, res) {
    var recieve_ID = req.body.RecieveID;
    var sender_ID = req.body.SenderID;
    var league_ID = req.body.LeagueID;
    db.sendInvite(sender_ID, recieve_ID, league_ID).then(function (result) {
        if (result == undefined) {
            res.status(500).send("Error Sending Invite");
        } else {
            res.status(200).send();
        }
    });
});

router.get("/:user_id/invites", function (req, res) {
    var id = req.params.user_id;
    db.getAllLeagueInvites(id).then(function (result) {
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    });
});

router.post("/:user_id/invites/:league_id", function (req, res) {
    var user_id = req.params.user_id;
    var league_id = req.params.league_id;
    var team_name = req.body.TeamName;
    db.insertUserIntoLeague(user_id, league_id, team_name).then(function (result) {
        if (result == undefined) {
            res.status(500).send("Error Accepting Invite");
        } else {
            res.status(200).send();
        }
    });
});


router.delete("/:user_id/invites/:league_id", function (req, res) {
    var user_id = req.params.user_id;
    var league_id = req.params.league_id;
    db.deleteInvite(user_id, league_id).then(function (result) {
        if (result == undefined) {
            res.status(500).send("Error Deleting Invite");
        } else {
            res.status(200).send();
        }
    });
});

router.get("/:user_ID/league/:league_ID/:week/roster", function (req, res) {
    var user_ID = req.params.user_ID;
    var league_ID = req.params.league_ID;
    var week = req.params.week;
    db.getUserRoster(user_ID, league_ID, week).then(function (result) {
        res.send(result);
    });
});

router.delete("/:userID/league/:leagueID/leaveLeague", function (req, res) {
    var userID = req.params.userID;
    var leagueID = req.params.leagueID;

    db.userLeaveLeague(userID, leagueID).then(function (result) {
        if (result == undefined) {
            res.status(500).send("Error Leaving From League");
        } else {
            res.status(200).send();
        }
    });
});

module.exports = function (_db) {
    db = _db;
    return router;
}