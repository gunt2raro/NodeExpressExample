//
// PermissionModel
// @Author : Ramiro Gutierrez Alaniz
// @Date : february 8th, 2015
//

/*
* Constructor
*/
var PermissionModel = function(){

	this.permissionid = 0;
	this.description = "";
	this.value = 0;

}//End of Contructor function

/*
* permissions
* Return all the permissions
*/
PermissionModel.prototype.permissions = function( req, res ){

	req.getConnection( function( err, connection ){

		connection.query( 'SELECT * FROM Permission', function( err, rows ){

			res.contentType( 'application/json' );
			res.setHeader( 'Access-Control-Allow-Origin', 'http://localhost' );

			if(err){

				console.log( 'Error : %s ', err );

			}

			return rows;
		});

	});

};//End of permissions function


//Export to the express module
module.exports = PermissionModel;
