var express = require('express')
var router = express.Router()

router.get("/", function (req, res) {
    db.getAllUsers().then(function (result) {
        res.send(result);
    });
});

router.post("/", function (req, res) {
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

router.get("/search", function (req, res) {
    var query = "";
    if (req.query.query != undefined) {
        query = req.query.query;
    }
    db.searchUserByName(query).then(function (result) {
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    });
});

module.exports = function (_db) {
    db = _db;
    return router;
}