
//------------code from assignment-------------
var express = require("express");
var http = require("http");



var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));
// app.use(express.static('public'));
http.createServer(app).listen(port);
//-----------------------------------------------
const bodyparser = require("body-parser");

/* GET home page. */
app.get('/', function(req, res, next) {
  res.sendFile("splash.html", {root: "./public"});
});

// pressing play button returns game page
app.get("/play", function(req, res, next) {
  res.sendFile("game.html", {root: "./public"});
});



//log each request made to server
app.use(function(req, res, next) {
  console.log('[LOG] %s\t%s\t%s\t%s', new Date().toISOString(), req.connection.remoteAddress,
      req.method, req.url);
  next(); // call on to next component
});


//---------- auto generated code----------//
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

 module.exports = app;
