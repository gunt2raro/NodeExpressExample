//Rquired modules
var express = require('express');
var user = require('User');
var router = express.Router();

/**
* read
* REST pettition for making the read of users
***************************************************/
router.get('/', user.users );//End of the read pettition

/***
* add
* REST pettition for getting the info for a new a new user
***************************************************/
router.get('/add', user.retrieve_add_info );//End of add pettition

/**
* add
* REST pettition for save a new user
***************************************************/
router.post('/add', function(req, res){

	var input = JSON.parse(JSON.stringify(req.body));

	req.getConnection(function (err, connection) {

		var data = {

			username : input.username,
			name : input.real_name,
			lastname  : input.lastname,
			password  : input.password,
			email : input.email,
			permissionid : 1

		};

		var query = connection.query("INSERT INTO User set ? ", data, function(err, rows){

			res.contentType('application/json');

			if (err){

				console.log("Error inserting : %s ",err );
				res.send("false");

			} else {

				res.send("true");

			}


		});

	});

});//End of add pettition

/**
* update
* REST pettition for making the delete of a user
***************************************************/
router.get('/update/:username', function(req, res){

	var username = req.params.username;

	req.getConnection(function(err,connection){

		connection.query( 'SELECT * FROM User WHERE username = ?',[username], function( err, rows ){

			res.contentType('application/json');

			if( err ){

				console.log( "Error Selecting : %s ", err );

			} else {

				res.send( rows );

			}

		});

	});

});//End of update pettition

/**
* update
* REST pettition for making the delete of a user
***************************************************/
router.post('/update/:username', function( req, res ){

	var input = JSON.parse(JSON.stringify(req.body));
	var username = req.params.username;

	req.getConnection(function (err, connection) {

		var data = {

			name : input.real_name,
			lastname  : input.lastname,
			password  : input.password,
			email : input.email

		};

		connection.query("UPDATE User set ? WHERE username = ? ", [data, username], function(err, rows){

			res.contentType('application/json');

			if ( err ){

				console.log("Error Updating : %s ",err );
				res.send("false");

			} else {

				res.send("true");

			}
		});

	});

});//End of update pettition

/**
* delete
* REST pettition for making the delete of a user
***************************************************/
router.get( '/delete/:username', function( req, res ){

	//Logic delete on session start

});//End of delete pettition


module.exports = router;
