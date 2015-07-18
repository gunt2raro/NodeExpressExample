//Data Requires
var encryption_system = require( '../Data/EncryptionSystemModel' );
var es = new encryption_system();

module.exports = EncryptionSystemController;

/*
* Constructor
*/
function EncryptionSystemController(){}//End of contructor

/*
* registration_info
* Method that sends the info nesesary for the registration
*/
EncryptionSystemController.encryption_system_info = function( req, res ){
	console.log( 'aquí pinchis jala controller' );
	//Contnet of the method logic
	res.contentType('application/json');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
	req.getConnection( function(err, connection){
		console.log( 'aquí pinchis jala controller 2' );
		es.retrieve_add_info( connection, res );

	});

};//End of registration_info Function

/*
* registrate_user
* Method that performs the registration of a user
*/
EncryptionSystemController.add_new_encryption_system = function( req, res ){

	//Conent of the method logic here
	res.contentType('application/json');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

	req.getConnection(function(err, connection){

		es.add_new_encryption_system( connection, res );

	});

};//End of resgistrate_user function

/*
* registrate_user
* Method that performs the registration of a user
*/
EncryptionSystemController.testing = function( req, res ){

	//Conent of the method logic here
	res.contentType('application/json');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
	var input_data = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){

		es.testing( connection, res );

	});

};//End of resgistrate_user function
