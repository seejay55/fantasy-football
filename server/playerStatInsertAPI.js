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

var check = 0;
fetch('http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=' + season + '&week=' + number + '&format=json')
  .then(function (data) {
    return (data.json());

  })
  .then(function (json) {
    for (var i = 0; i < json.players.length; i++) {
      var playerID = json.players[i].id;
      for (const prop in json.players[i].stats) {
        check++;
        console.log(check);
        const statValues = {
          PlayerID: playerID,
          StatID: prop,
          GameStatValue: json.players[i].stats[prop]
        };
        connection.query('INSERT INTO game_stats_totals SET ?', statValues, (error, res) => {
          if (error) {
            throw error;
          }
        });
      }
    }
    connection.end();
  })
  .catch(function (error) {
    console.log(error);
    connection.end();
  });
