//
// EncryptionSystemModel
// @Author : Ramiro Gutierrez Alaniz
// @Date : april 16th, 2015
//

//The hash generator module require
var uuid = require( 'node-uuid' );
//bicrypt module require statement
var bcrypt = require( 'bcryptjs' );
//The RSA module require
var rsa = require('node-rsa');

var crypto = require('crypto');



/*
* EncryptionSystemModel Constructor
*/
var EncryptionSystemModel =  function(){
	//here goes the model post content definition
	this.appid = "";
	this.token = "";
	this.publicKey = "";
	this.privateKey = "";

};//End of EncryptionSystemModel Constructor

/*
* retrieve_add_info
* Method that returns all the info needed for adding a new post
*/
EncryptionSystemModel.prototype.retrieve_add_info = function( connection, res ){

	connection.query('SELECT * FROM EncryptionSystem', function( err,rows ){

		if(err) throw err;

		res.send( rows );

	});

};//End of EncryptionSystemModel retrieve add info function

/*
* add_new_encryption_system
* Method that adds new post to the database
*/
EncryptionSystemModel.prototype.add_new_encryption_system = function( connection, res ){

	var gen_appid = uuid.v4();
	var gen_tokenid = uuid.v4();
	var hash_token = bcrypt.hashSync( gen_tokenid, bcrypt.genSaltSync(10) );


	//var key = new rsa( { b : 512 } );
	var key = new rsa( );
	key.generateKeyPair( 512, 65537);
	console.log( key.exportKey('pkcs1-der').toString( 'base64' ) );
	console.log( key.exportKey('pkcs8-public-der').toString( 'base64' ) );

	var gen_privateKey = key.exportKey('pkcs1-der').toString( 'base64' );
	var gen_publicKey = key.exportKey('pkcs8-public-der').toString( 'base64' );

	var data = {

		appid : gen_appid,
		token : hash_token,
		publicKey  : gen_publicKey,
		privateKey  : gen_privateKey

	};

	var query = connection.query("INSERT INTO EncryptionSystem set ? ", data, function(err, rows){

		if (err){

			console.log("Error inserting : %s ",err );
			res.send(err);

		} else {

			var ret_data = {

				appid : data.appid,
				token : gen_tokenid,
				publicKey : data.publicKey

			};

			res.send( ret_data );

		}

	});

};//End of EncryptionSystemModel add new encryption_system function

/*
* retrieve_update_encryption_system
* Method that retrieves the info needed for the update of a post
*/
EncryptionSystemModel.prototype.retrieve_update_encryption_system = function( req, res ){};//End of EncryptionSystemModel retrieve update info function

/*
* update_encryption_system
* Method that updates a encryption_system on the database
*/
EncryptionSystemModel.prototype.update_encryption_system = function( req, res ){};//End of EncryptionSystemModel update_encryption_system function

/*
* delete_encryption_system
* Method that deletes a encryption_system from the database
*/
EncryptionSystemModel.prototype.delete_encryption_system = function( req, res ){};//End of EncryptionSystemModel delete_encryption_system function

EncryptionSystemModel.prototype.testing = function( req, res ){

	var public_key = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKakCOjCwAJmlNXY81sIc93iB9T2+r52shwHBUkWnkQvny774f7Ej60o7rLPkPrE1XKRLfvhA8PqhRIoflWWIxECAwEAAQ==';
	var private_key = 'MIIBOwIBAAJBAKakCOjCwAJmlNXY81sIc93iB9T2+r52shwHBUkWnkQvny774f7Ej60o7rLPkPrE1XKRLfvhA8PqhRIoflWWIxECAwEAAQJAFJ2+rG1LrABc8YgBs4V8MDtClMppgx7UMjt8H+q4cd7ufjlnJKX9taL6gzTIdGz8ZLtnxw/E7YBi8+L4JD1TQQIhAPaDurtaRKwH9JGC+/YeuJ2yBjE3FIQokLjUDdEQd5udAiEArQ2D6vdwiHjab++QjY93q0IAbPeVbyX7MEJ2vrlDrQUCIQDR8hirjVJlDRVuhBagY0OqEj8R1S4k7ANtVjQ6NIMZRQIhAJu3uajJFz32YbivvUdkfa5hKbjj4FevuaPnaqqcUsVxAiAoiOKDh/B0kkjkmln/WixGHKIBZLTBLx5oNMiq4RaSMw==';

	console.log( _encrypt("hola mundo", ('-----BEGIN PRIVATE KEY-----\n' + private_key + '\n-----END PRIVATE KEY-----')) );

	res.send( "testing bitch" );

};

//Export the model as module
module.exports = EncryptionSystemModel;
