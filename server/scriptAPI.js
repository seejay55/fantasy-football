//Retrieving stats from fantasy site and putting them into database
var fetch = require('node-fetch');
var mysql = require('mysql');
var db = require('../config/config');


var db_host = db.db_HOST;
var db_user = db.db_USER;
var db_password = db.db_PASSWORD;
var db_database = db.db_DATABASE;

//Change this number depending on what week/season you want inserted into the database
//What is in database already:
//Season 2016: week 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
//Season 2017: week 1
var number = 1;
var season = 2017;

var connection = mysql.createConnection({
  host: db_host,
  user: db_user,
  password: db_password,
  database: db_database
});

connection.connect(function (err) {
  if (err) {
    console.log('Connection failed' + err.stack);
    return;
  }
  console.log('Connection established.');
});

fetch('http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=' + season + '&week=' + number + '&format=json')
  .then(function (data) {
    return (data.json());

  })
  .then(function (json) {
    console.log('Now inserting player and player stats for Season: ' + season + ', week ' + number + '.');
    var playerQuery = 'INSERT INTO nfl_players SET ? ON DUPLICATE KEY UPDATE player_id = player_id';
    for (var i = 0; i < json.players.length; i++) {
      const player = {
        player_id: json.players[i].id,
        player_name: json.players[i].name,
        player_pos: json.players[i].position,
        team_abbr: json.players[i].teamAbbr
      };
      const playerStats = {
        year: json.season,
        week: json.week,
        player_id: json.players[i].id,
        season_pts: json.players[i].seasonPts,
        season_predicted_pts: json.players[i].seasonProjectedPts,
        week_pts: json.players[i].weekPts,
        week_predicted_pts: json.players[i].weekProjectedPts
      };
      connection.query(playerQuery, player, (err, res) => {
        if (err) {
          throw err;
        }
      });
      connection.query('INSERT INTO nfl_stats SET ?', playerStats, (error, res) => {
        if (error) {
          throw error;
        }
      });
    }
    connection.end();
    console.log('Completed insert command.');
  })
  .catch(function (error) {
    console.log(error);
    connection.end();
  });
