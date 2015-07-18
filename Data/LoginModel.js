//
// LoginModel
// @Author : Ramiro Gutierrez Alaniz
// @Date : febreuary 8th, 2015
//
var bcrypt = require( 'bcryptjs' );

var LoginModel = function(  ){

	this.username = "";
	this.password = "";

};//End of constructor

/*
* validate_user
* Method that validates user to be authentic to login
*/
LoginModel.prototype.validate_user = function( input_data, connection, res ){

	var data = {

		username : input_data.username,
		password : input_data.password

	};

	connection.query( 'SELECT * FROM User WHERE username = ? ', [ input_data.username ] , function( err, rows ){

		if( err ){
			res.send(err);
		}else{

			var count = Object.keys(rows).length;

			if( count > 0 ){

			  	if( bcrypt.compareSync( input_data.password, rows[0].password ) ){

					var ret_data = {

						username : rows[0].username,
						name : rows[0].name,
						lastname : rows[0].lastname,
						email : rows[0].email,
						permissionid : rows[0].permissionid

					};

					res.send( ret_data );

			  	}else{

					err = { message : "Password Incorrect" };
					res.send( err );

			  	}

			}else{

				res.send( "There are no user registered with that User name, sorry" );

			}

		}

	});

};//End of validate_user function

/*
* Close session
* Method for closing the session
*/
LoginModel.prototype.close_session = function( connection ){

	//This is for in case we need to know the session of someone

};//End of close_session function

//export the login model to the modules
module.exports = LoginModel;
