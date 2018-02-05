var express = require('express');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var cors = require('cors');
//var db = require('./config/db'); // Require for config file

var app = express();
app.use(bodyParser.json());
app.use(cors());

//var db_PATH = db.db_PATH; //Database connection path

var server = app.listen(8000, function(){
  console.log('Server listening on port 8000');
});
