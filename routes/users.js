// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require('express');
var router = express.Router();

// if you do an HTTP GET to /users/userlist, our server will return JSON that lists all of the users in the database
router.get('/userlist', function(req, res) {

    var connection = req.db;

    connection.query('SELECT * FROM volunteers', function(err, rows) {

        res.json(rows);

    });
});

module.exports = router;