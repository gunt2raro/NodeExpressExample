//Resources
var errResources = require( './Resources/errors.json' );
var msjResources = require( './Resources/messages.json' );
///Exporting all the modules
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//Debug shit
var debug = require('debug')('http');
//routes
var routes = require( './routes/index' );
//Encryption system services
var encryption_system = require( './routes/encryption_system_service' );
//User services
var users = require( './routes/user_service' );
//Post services
var posts = require( './routes/post_service' );
//Login services
var login = require( './routes/login_service' );
//Registration services
var registration = require( './routes/registration_service' );
//The express framework initialization
var app = express();
//MySQL module daaaah
var mysql = require('mysql');
//Another coool module for mysql connection express
var connection  = require('express-myconnection');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//The engine for interfaces or views in this case
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Mysql connection parameters
app.use(

    connection(mysql,{
        host: 'localhost',
        user: 'root',
        password : 'laspalmas123',
        port : 3306,
        database:'hub_politico'
    },'request')

);//End of msyql parameters

//Here goes the routing
app.use( '/', routes );//The defoult route
app.use( '/encryption_system', encryption_system );//Encryption system route
app.use( '/users', users );//Users route
app.use( '/posts', posts );//Posts route
app.use( '/login', login );//Login route
app.use( '/registration', registration );//Registration route

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//Set the port configuration
var port = process.env.PORT || 4550;

app.listen( port, function(){

	console.log( msjResources.messages.app.msj1 + port );

});//End of the port listening

//Exporting the application to the app
module.exports = app;
