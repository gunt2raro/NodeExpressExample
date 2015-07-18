var post = require( '../Data/PostModel' );
var p = new post();

module.exports = PostController;

/*
* Post controller
*/
function PostController(){

}//End of constructor


PostController.retrieve_add_info = function( req, res ){

	//Contnet of the method logic
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
	req.getConnection( function(err, connection){

		p.retrieve_add_info( connection, res );

	});

};//End of retrieve_Add_info function

/*
* get_post_by_userid
* Method that returns all the users post
*/
PostController.get_posts_by_userid = function( req, res ){

	//Contnet of the method logic
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

	var input_data = JSON.parse(JSON.stringify(req.body));//Getting the body uri data

	req.getConnection( function(err, connection){

		p.get_posts_by_userid( input_data.userid, connection, res );

	});

};//End of PostController get_post_by_userid function

/*
* get_post_by_date
* Method that returns all the users post
*/
PostController.get_posts_by_date = function( req, res ){

	//Contnet of the method logic
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

	var input_data = JSON.parse(JSON.stringify(req.body));//Getting the body uri data

	req.getConnection( function(err, connection){

		p.get_posts_by_date( input_data.initial_date, input_data.final_date, connection, res );

	});

};//End of PostController get_post_by_date function

/*
* get_all_posts_by_relevance
* Gets all the most relevant posts
*/
PostController.get_all_posts_by_relevance = function( req, res ){

	//Contnet of the method logic
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

	var input_data = JSON.parse(JSON.stringify(req.body));//Getting the body uri data

	req.getConnection( function(err, connection){

		p.get_all_posts_by_relevance( connection, res );

	});

};//End of PostController get_post_by_relevance function

/*
* get_posts_by_relevance_and_type
* Gets all the most relevant posts by type
*/
PostController.get_posts_by_relevance_and_type = function( req, res ){

	//Contnet of the method logic
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

	var input_data = JSON.parse(JSON.stringify(req.body));//Getting the body uri data

	req.getConnection( function(err, connection){

		p.get_posts_by_relevance_and_type( input_data.post_type, connection, res );

	});

};//End of PostController get_post_by_relevance_and_type function

/*
* get_posts_by_relevance_and_column
* Gets all the most relevant posts by column
*/
PostController.get_posts_by_relevance_and_column = function( req, res ){

	//Contnet of the method logic
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

	var input_data = JSON.parse(JSON.stringify(req.body));//Getting the body uri data

	req.getConnection( function(err, connection){

		p.get_posts_by_relevance_and_column( input_data.columnid, connection, res );

	});

};//End of get_posts_by_relevance_and_column function

/*
* add_new_post
* Method that adds new post to the database
*/
PostController.add_new_post = function( req, res ){

	//Contnet of the method logic
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

	var input_data = JSON.parse(JSON.stringify(req.body));//Getting the body uri data

	req.getConnection( function(err, connection){

		p.add_new_post( input_data, connection, res );

	});

};//End of PostController add new post function

/*
* retrieve_update_post
* Method that retrieves the info needed for the update of a post
*/
PostController.retrieve_update_post = function( req, res ){

	//Contnet of the method logic
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

	var input_data = JSON.parse(JSON.stringify(req.body));//Getting the body uri data

	req.getConnection( function(err, connection){

		p.retrieve_update_post( input_data.postid, connection, res );

	});

};//End of PostController retrieve update info function

/*
* update_post
* Method that updates a post on the database
*/
PostController.update_post = function( req, res ){

	//Contnet of the method logic
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

	var input_data = JSON.parse(JSON.stringify(req.body));//Getting the body uri data

	req.getConnection( function(err, connection){

		p.update_post( input_data, connection, res );

	});

};//End of PostController update_post function

/*
* delete_post
* Method that deletes a post from the database
*/
PostController.delete_post = function( req, res ){

	//Contnet of the method logic
	res.contentType('application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

	var input_data = JSON.parse(JSON.stringify(req.body));//Getting the body uri data

	req.getConnection( function(err, connection){

		p.delete_post( input_data.postid, connection, res );

	});

};//End of PostController delete_post function
