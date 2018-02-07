var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
var db = require('../config/config');


var db_host = db.db_HOST;
var db_user = db.db_USER;
var db_password = db.db_PASSWORD;
var db_database = db.db_DATABASE;

var app = express();
app.use(bodyParser.json());
app.use(cors());

var connection = mysql.createConnection({
  host: db_host,
  user: db_user,
  password: db_password,
  database: db_database
});

connection.connect(function(err){
if(err){
  console.log('Connection failed' + err.stack);
  return;
}
console.log('Connection established.');
});


//var db_PATH = db.db_PATH; //Database connection path

var server = app.listen(8000, function(){
  console.log('Server listening on port 8000');
});

app.get("/api/stats/:week", function(req, res){
  var id = req.params.week;
  var query = 'SELECT * FROM nfl_stats WHERE week = ' + id;
  connection.query(query, function(err, rows, fields){
    if(err) console.log(err);
    res.send(rows);

    for(var i in rows)
    {
      console.log(rows[i]);
    }
  });
});
