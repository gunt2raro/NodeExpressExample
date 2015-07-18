//Rquired modules
var express = require('express');
var post = require( '../Business/PostController' );
var router = express.Router();


router.get( '/', post.retrieve_add_info );
router.get( '/ByUserId', post.get_posts_by_userid );
router.get( '/ByRelevance', post.get_all_posts_by_relevance );
router.get( '/ByRelevance_type', post.get_posts_by_relevance_and_type );
router.get( '/ByRelevance_column', post.get_posts_by_relevance_and_column );
router.get( '/Update', post.retrieve_update_post );

router.post( '/', post.add_new_post );

router.put( '/Update', post.update_post );
router.put( '/Delete', post.delete_post );


/*
* exporting the routes added on the router obj
*/
module.exports = router;
