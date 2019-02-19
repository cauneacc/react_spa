const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// const {getHomePage} = require('./routes/index');
// const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 5000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'spa_server'
});

// connect to database
db.connect((err) => {
	    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

app.get('/', function (req, res) {
	let query = "SELECT * FROM calendar ORDER BY id ASC"; // query database to get all the players
	// execute query
	db.query(query, (err, result) => {
		res.end( JSON.stringify( result ) );
	});
})

app.post('/', urlencodedParser, function (req, res) {
	let query = "insert into calendar (id, data) values ("+mysql.escape(req.body.id)+","+mysql.escape(req.body.data)+") ON DUPLICATE KEY UPDATE data="+mysql.escape(req.body.data)+";";
	db.query(query, (err, result) => {
		if (err) {
			console.log(query);
                throw err;
            }
		res.end( 'ok' );
	});
})
