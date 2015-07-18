//Require Modules
var express = require( 'express' );
var login = require( '../Business/LoginController' );
var router = express.Router();

/*
* registration get route
* this sends the information needed to the aplication side (views  and pettions)
* about the registration
*/
router.get( '/', login.registration_info );

/*
* registration post route
* this sends the information for registration back to the server to aproval
* about the registration
*/
router.post( '/', login.registrate_user );


module.exports = router;
