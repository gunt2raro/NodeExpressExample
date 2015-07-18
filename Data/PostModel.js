
//Debug shit
var debug = require('debug')('http');
var errMes = require( '../Resources/errors.json' );
var msjResources = require( '../Resources/messages.json' );

/*
* PostModel Constructor
*/
var PostModel = function(){
	//here goes the model post content definition
};//End of PostModel Constructor

/*
* retrieve_add_info
* Method that returns all the info needed for adding a new post
*/
PostModel.prototype.retrieve_add_info = function( connection, res ){

	connection.query('SELECT * FROM PostType', function( err,rows ){

		if(err){
			debug( 'Displaying errors : ' + err.toString() );
			throw err;
		}

		res.json( rows );

	});

};//End of PostModel retrieve add info function

/*
* get_post_by_userid
* Method that returns all the users post
*/
PostModel.prototype.get_posts_by_userid = function( userid, connection, res ){
	//function logic
	res.send( 'get_posts_by_userid' );
};//End of PostModel get_post_by_userid function

/*
* get_post_by_date
* Method that returns all the users post
*/
PostModel.prototype.get_posts_by_date = function( initial_date, final_date, connection, res ){
	//function logic
	res.send( 'get_posts_by_date' );
};//End of PostModel get_post_by_date function

/*
* get_all_posts_by_relevance
* Gets all the most relevant posts
*/
PostModel.prototype.get_all_posts_by_relevance = function( connection, res ){
	//function logic
	res.send( 'get_all_posts_by_relevance' );
};//End of PostModel get_post_by_relevance function

/*
* get_posts_by_relevance_and_type
* Gets all the most relevant posts by type
*/
PostModel.prototype.get_posts_by_relevance_and_type = function( post_type, connection, res ){
	//function logic
	res.send( 'get_posts_by_relevance_and_type' );
};//End of PostModel get_post_by_relevance_and_type function

/*
* get_posts_by_relevance_and_column
* Gets all the most relevant posts by column
*/
PostModel.prototype.get_posts_by_relevance_and_column = function( columnid, connection, res ){
	//function logic
	res.send( 'get_posts_by_relevance_and_column' );
};//End of get_posts_by_relevance_and_column function

/*
* add_new_post
* Method that adds new post to the database
*/
PostModel.prototype.add_new_post = function( input_data, connection, res ){

	//function logic
	var data = {

		userid : parseInt( input_data.userid ),
		content : input_data.content,
		title  : input_data.title,
		date  : input_data.date,
		time : input_data.time,
		post_type : parseInt( input_data.post_type ),
		anonymous : parseInt( input_data.anonymous ),
		state : input_data.state,
		country : input_data.country

	};
	debug( "Data: %j", data );
	var query = connection.query("INSERT INTO Post set ? ", data, function(err, rows){
		if (err){
			//Febug console
			debug( err );
			debug( errMes.errors.Post.err1 );
			//Error client display
			res.statusCode = 409;
			res.json( {

				"err1" : errMes.errors.Post.err1,
				"response" : err
			});

		} else {

			res.json( {

				"msj1" : msjResources.messages.Post.msj1,
				"response" : data
			} );

		}

	});
};//End of PostModel add new post function

/*
* retrieve_update_post
* Method that retrieves the info needed for the update of a post
*/
PostModel.prototype.retrieve_update_post = function( postid, connection, res ){
	//function logic
	res.send( 'retrieve_update_post' );
};//End of PostModel retrieve update info function

/*
* update_post
* Method that updates a post on the database
*/
PostModel.prototype.update_post = function( input_data, connection, res ){
	//function logic
	res.send( 'update_post' );
};//End of PostModel update_post function

/*
* delete_post
* Method that deletes a post from the database
*/
PostModel.prototype.delete_post = function( postid, connection, res ){
	//function logic
	res.send( 'delete_post' );
};//End of PostModel delete_post function

//export the postmodel to make it visible
module.exports = PostModel;
