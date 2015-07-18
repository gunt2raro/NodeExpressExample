//Require Modules
var express = require( 'express' );
var login = require( '../Business/LoginController' );
var router = express.Router();

/*
* login get route
* this sends the information needed to the aplication side (views  and pettions)
* about the login
*/
router.get( '/', login.login_info );

/*
* login post route
* this sends the information for registration back to the server to aproval
* about the login
*/
router.post( '/', login.login_user );

/*
* exporting the routes added on the router obj
*/
module.exports = router;
