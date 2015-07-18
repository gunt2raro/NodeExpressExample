var user = require( '../Data/UserModel' );
var u = new user();

//Export the loginController
module.exports = LoginController;

/*
* Constructor
*/
function LoginController(){
	//Content of the constructor function
}//End of LoginController class Constructor

/*
* registration_info
* Method that sends the info nesesary for the registration
*/
LoginController.registration_info = function( req, res ){

	//Contnet of the method logic
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
	req.getConnection( function(err, connection){

		u.users( connection, res );

	});

};//End of registration_info Function

/*
* registrate_user
* Method that performs the registration of a user
*/
LoginController.registrate_user = function( req, res ){

	//Conent of the method logic here
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
	var input_data = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){

		u.add_new_user( input_data, connection, res );

	});

};//End of resgistrate_user function

/*
* login_info
* Sends the info needed for the user login
*/
LoginController.login_info = function( req, res ){

	//Conent of the method logic here
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
	res.send( 'login info' );

};//End of login_info function

/*
* login_user
* returns the info for the user login
*/
LoginController.login_user = function( req, res ){

	var loginModel = require( '../Data/LoginModel' );
	var input_data = JSON.parse(  JSON.stringify( req.body ) );

	var l = new loginModel( );

	//Conent of the method logic here
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

	req.getConnection(function(err, connection){

		l.validate_user( input_data, connection, res );

	});

};//End of login_user function
