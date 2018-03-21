var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
var config = require('../config/config');
var DB = require('./database')

var db_host = config.db_HOST;
var db_user = config.db_USER;
var db_password = config.db_PASSWORD;
var db_database = config.db_DATABASE;

var db = new DB.DB(db_host, db_user, db_password, db_database);

var app = express();
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

var server = app.listen(8000, function () {
  console.log('Server listening on port 8000');
});

/**
 * Users
 */
app.get("/api/users", function (req, res) {
  db.getAllUsers().then(function (result) {
    res.send(result);
  });
});

app.post("/api/users", function (req, res) {
  var email = req.body.Email;
  var password = req.body.Password;
  var username = req.body.Username;
  db.createUser(email, password, username).then(function (result) {
    res.status(200);
  });
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

app.get("/api/user/:user_id/leagues", function(req, res) {
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

app.patch("/api/user/:user_id", function (req, res) {
  var id = req.params.user_id;
  console.log(req);
  var username = req.body.Username;
  var profilePic = req.body.ProfilePic;
  var password = req.body.Password;
  db.updateUser(id, username, password).then(function (result) {
    db.getUserInfoById(id).then(function(result) {
        res.status(200).send(result);
    });
  });
});

app.delete("/api/user/:user_id", function (req, res) {
    var id = req.params.user_id;
    db.deleteUser(id).then(function (result) {
        res.status(204);
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
    db.insertUserIntoLeague(user_id, league_id).then(function (result) {
        if (result == undefined) {
            res.status(500).send("Error Accepting Invite");
        }
        else {
            res.send("Successfully Accepted Invite");
        }
    });
});

app.delete("/api/user/:user_id/invites/:league_id", function (req, res) {
    var user_id = req.params.user_id;
    var league_id = req.params.league_id;
    db.deleteInvite(user_id, league_id).then(function (result) {
        if (result == undefined) {
            res.status(500).send("Error Deleting Invite");
        }
        else {
            res.send("Successfully Deleted Invite");
        }
    });
});

/**
 * Leagues
 */
app.get("/api/leagues", function (req, res) {
  db.getAllLeagues().then(function (result) {
    res.setHeader('Content-Type', 'application/json');
    res.json(result);
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
    res.send(result);
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
