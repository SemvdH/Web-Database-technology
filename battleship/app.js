
//------------code from assignment-------------
var express = require("express");
var http = require("http");
var websocket = require("ws");
var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));
// app.use(express.static('public'));
var server = http.createServer(app)
//-----------------------------------------------
const bodyparser = require("body-parser");

//websocket part
// const wss = new WebSocket.Server( {server} );

// wss.on("connection", function(ws) {
//   ws.on("message", function incoming(message) {
//     console.log("[LOG] " + message);
//   });
// });


/* GET splash page. */
// app.get('/', function(req, res, next) {
//   res.sendFile("splash.html", {root: "./public"});
// });

// templating
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('splash.ejs', { gamesInitialized: gameStatus.gamesInitialized, gamesCompleted: gameStatus.gamesCompleted });
});

// pressing play button returns game page
app.get("/play", function(req, res, next) {
  res.sendFile("game.html", {root: "./public"});
});

server.listen(port);

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
