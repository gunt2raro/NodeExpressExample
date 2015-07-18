//
// UserModel
// @Author : Ramiro Gutierrez Alaniz
// @Date : february 8th, 2015
//

//bicrypt module require statement
var bcrypt = require( 'bcryptjs' );

/*
* UserModel Constructor
*/
var UserModel = function(){
	//Here goes the fuckin shit of the class
	this.userid = "";
	this.username = "";
	this.lastname = "";
	this.real_name = "";
	this.permissionid = "";
	this.password = "";
	this.email = "";
};//End of the User Class


/*
* read
* REST pettition for making the read of users
*/
UserModel.prototype.users = function( connection, res ){

	connection.query('SELECT * FROM User', function( err,rows ){

		if(err) throw err;

		res.send( rows );

	});

};//End of users function

/*
* retrieve add info
* it is for the return of the information needed for the add user
*/
UserModel.retrieve_add_info = function( req, res ){

	res.send( '/si jala esto es porque a huevo' );

};//End of add pettition

/*
* add new user
* Method for adding a new user on the database
*/
UserModel.prototype.add_new_user = function( input_data, connection, res){

	var hashpassword = bcrypt.hashSync( input_data.password, bcrypt.genSaltSync(10) );
	var data = {

		username : input_data.username,
		name : input_data.real_name,
		lastname  : input_data.lastname,
		password  : hashpassword,
		email : input_data.email,
		permissionid : 1

	};

	var query = connection.query("INSERT INTO User set ? ", data, function(err, rows){

		if (err){

			console.log("Error inserting : %s ",err );
			res.send(err);

		} else {

			var ret_data = {

				username : input_data.username,
				name : input_data.name,
				lastname : input_data.lastname,
				email : input_data.email,
				permissionid : 1

			};

			res.send( ret_data );

		}

	});

};//End of add new user function

UserModel.prototype.retrieve_update_user =  function( username, connection, res ){
	//Service struct
	//var username = req.params.username;
	//req.getConnection(function(err,connection){
		//res.contentType('application/json');
		//u.retrive_update_user( username, connection, res );
	//});
	connection.query( 'SELECT * FROM User WHERE username = ?',[username], function( err, rows ){

		if( err ){

			res.send( err );

		} else {

			res.send( rows );

		}

	});

};//End of update pettition

UserModel.prototype.update_user = function( input_data, username, connection, res ){
	//Data struct for the controller or implementation
	//var input_data = JSON.parse(JSON.stringify(req.body));
	//var username = req.params.username;

	//req.getConnection(function (err, connection) {
		//res.contentType('application/json');
		//u.update_user(input_data, username, connection, res);
	//});

	var data = {

		name : input_data.real_name,
		lastname  : input_data.lastname,
		password  : input_data.password,
		email : input.email

	};

	connection.query("UPDATE User set ? WHERE username = ? ", [data, username], function(err, rows){

		if ( err ){

			res.send(err);

		} else {

			res.send(rows);

		}

	});//End of the query

};//End of update pettition

/*
* delete_user
* Method for delete the user in a logic way
*/
UserModel.prototype.delete_user =  function( username, connection, res ){

	var data = {

		active  : 0

	};

	connection.query("UPDATE User set ? WHERE username = ? ", [data, username], function(err, rows){

		if ( err ){

			res.send(err);

		} else {

			res.send(rows);

		}

	});//End of the query

};//End of delete pettition

//Export usermodel to the modules
module.exports = UserModel;
