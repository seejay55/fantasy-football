var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
var config = require('../config/config');
var DB = require('./database');

var db_host = config.db_HOST;
var db_user = config.db_USER;
var db_password = config.db_PASSWORD;
var db_database = config.db_DATABASE;

var db = new DB.DB(db_host, db_user, db_password, db_database);

var user = require('./api/user')(db);
var users = require('./api/users')(db);
var league = require('./api/league')(db);
var leagues = require('./api/leagues')(db);

var app = express();
app.use(bodyParser.json());
/*app.use(bodyParser.urlencoded({
    extended: true
}));*/
app.use(cors());

app.use('/api/user', user);
app.use('/api/users', users);
app.use('/api/league', league);
app.use('/api/leagues', leagues);

var server = app.listen(8000, function () {
    console.log('Server listening on port 8000');
});

/**
 * Users
 */
/*
app.get("/api/users", function (req, res) {
  db.getAllUsers().then(function (result) {
    res.send(result);
  });
});

app.post("/api/users", function (req, res) {
  var email = req.body.Email;
  var password = req.body.Password;
  var username = req.body.Username;
  var firstName = req.body.FirstName;
  var lastName = req.body.LastName;
  var id = req.body.ID;
  if (id) {
    db.createUser(email, password, username, firstName, lastName, id).then(function (result) {
      res.status(200).send(result);
    });
  } else {
    db.createUser(email, password, username, firstName, lastName).then(function (result) {
      res.status(200).send(result);
    });
  }
});

app.get("/api/user/authenticate", function (req, res) {
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

app.get("/api/user/:user_id/leagues", function (req, res) {
  var id = req.params.user_id;
  db.getAllLeaguesForUser(id).then(function (result) {
    res.send(result);
  });
});

app.get("/api/user/:user", function (req, res) {
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

app.patch("/api/league/:league_id", function (req, res) {
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

app.patch("/api/user/:user_id", function (req, res) {
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

app.delete("/api/user/:user_id", function (req, res) {
  var id = req.params.user_id;
  db.deleteUser(id).then(function (result) {
    res.status(204).send();
  });
});

app.post("/api/user/sendInvite", function (req, res) {
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

app.delete("/api/league/:league_id", function (req, res) {
  var leagueID = req.params.league_id;
  db.deleteLeague(leagueID).then(function (result) {
    res.status(204).send();
  });
});

app.get("/api/user/:user_id/invites", function (req, res) {
  var id = req.params.user_id;
  db.getAllLeagueInvites(id).then(function (result) {
    res.setHeader('Content-Type', 'application/json');
    res.json(result);
  });
});

app.post("/api/user/:user_id/invites/:league_id", function (req, res) {
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

app.delete("/api/user/:user_id/invites/:league_id", function (req, res) {
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

app.get("/api/user/:user_ID/league/:league_ID/:week/roster", function (req, res) {
  var user_ID = req.params.user_ID;
  var league_ID = req.params.league_ID;
  var week = req.params.week;
  db.getUserRoster(user_ID, league_ID, week).then(function (result) {
    res.send(result);
  });
});
*/
/**
 * Leagues
 */
/*
app.get("/api/leagues", function (req, res) {
  db.getAllLeagues().then(function (result) {
    res.setHeader('Content-Type', 'application/json');
    res.json(result);
  });
});

app.post("/api/leagues", function (req, res) {
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

app.get("/api/leagues/search", function (req, res) {
  var query = "";
  if (req.query.query != undefined) {
    query = req.query.query;
  }
  db.searchLeaguesByName(query).then(function (result) {
    res.setHeader('Content-Type', 'application/json');
    res.json(result);
  });
});

app.get("/api/users/search", function (req, res) {
  var query = "";
  if (req.query.query != undefined) {
    query = req.query.query;
  }
  db.searchUserByName(query).then(function (result) {
    res.setHeader('Content-Type', 'application/json');
    res.json(result);
  });
});

app.get("/api/league/:league_id/members", function (req, res) {
  var league_id = req.params.league_id;
  db.getLeagueMembers(league_id).then(function (result) {
    res.send(result);
  });
});

app.get("/api/league/:league_id/rosters", function (req, res) {
  var league_id = req.params.league_id;
  db.getLeagueRosters(league_id).then(function (result) {
    res.send(result);
  });
});

app.get("/api/league/:league_id/roster/:user_id", function (req, res) {
  var league_id = req.params.league_id;
  var user_id = req.params.user_id;
  db.getRoster(league_id, user_id).then(function (result) {
    res.send(result);
  });
});

app.get("/api/league/:league_id/schedule", function (req, res) {
  var league_id = req.params.league_id;
  var week = null;
  if (req.query.week != undefined) {
    week = req.query.week;
  }
  db.getLeagueSchedule(league_id, week).then(function (result) {
    res.send(result);
  });
});

app.get("/api/league/:league_id/record/:user_id", function (req, res) {
  var league_id = req.params.league_id;
  var user_id = req.params.user_id;
  db.getUserRecord(user_id, league_id).then(function (result) {
    res.send(result);
  });
});

app.get("/api/league/:league_id", function (req, res) {
  var league_id = req.params.league_id;
  db.getLeagueInfo(league_id).then(function (result) {
    if (result.length) {
      res.send(result);
    } else { res.status(404).send('League not found.'); }
  });
});

app.get("/api/league/:league_id/scores", function (req, res) {
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

app.get("/api/league/:leagueID/requests", function (req, res) {
  var league_ID = req.params.leagueID;

  db.getRequestsForLeague(league_ID).then(function (result) {
    res.send(result);
  });
});

app.post("/api/league/requestInvite", function (req, res) {
  var senderID = req.body.SenderID;
  var leagueID = req.body.LeagueID;
  var teamName = req.body.TeamName;

  db.requestInvite(senderID, leagueID, teamName).then(function (result) {
    res.send(result);
  });
});

app.post("/api/league/acceptRequest", function (req, res) {
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

app.delete("/api/league/:leagueID/user/:senderID/deleteRequest", function (req, res) {
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

app.post("/api/league/joinLeague", function (req, res) {
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

app.delete("/api/user/:userID/league/:leagueID/leaveLeague", function (req, res) {
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
*/
module.exports = app;
