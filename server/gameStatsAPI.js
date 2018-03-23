var fetch = require('node-fetch');
var mysql = require('mysql');
var db = require('../config/config');

var db_host = db.db_HOST;
var db_user = db.db_USER;
var db_password = db.db_PASSWORD;
var db_database = db.db_DATABASE;

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

fetch('http://api.fantasy.nfl.com/v1/game/stats?format=json')
  .then(function (data) {
    return (data.json());
  })
  .then(function (json) {
    for (var i = 0; i < json.stats.length; i++) {
      const statNumber = {
        ID: json.stats[i].id,
        Abbr: json.stats[i].abbr,
        Name: json.stats[i].name
      };

      connection.query('INSERT INTO game_stats_numbers SET ?', statNumber, (error, res) => {
        if (error) {
          throw error;
        }
      });
    }
    connection.end();
  })
  .catch(function (error) {
    console.log(error);
    connection.end();
  });
