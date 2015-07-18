//modules
var express = require( 'express' );
var en_sys = require( '../Business/EncryptionSystemController' );
var router = express.Router();

router.get( '/', en_sys.encryption_system_info );

router.post( '/', en_sys.add_new_encryption_system );

router.post( '/testing', en_sys.testing );

module.exports = router;
