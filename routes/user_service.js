//Rquired modules
var express = require('express');
var user = require( '../Data/UserModel' );
var router = express.Router();


/**
* read
* REST pettition for making the read of users
**************************************************
//router.get('/', user.users );//End of the read pettition

***
* add
* REST pettition for getting the info for a new a new user
***************************************************
router.get('/add', user.retrieve_add_info );//End of add pettition


* add
* REST pettition for save a new user
***************************************************
router.post('/add', user.add_new_user );//End of add pettition


* update
* REST pettition for making the delete of a user
*************************************************
router.get('/update/:username', user.retrieve_update_user );//End of update pettition


* update
* REST pettition for making the delete of a user
**************************************************
router.post('/update/:username', user.update_user );//End of update pettition


* delete
* REST pettition for making the delete of a user
**************************************************
router.get( '/delete/:username', user.delete_user );//End of delete pettition


* exporting the routes added on the router obj
*/
module.exports = router;
