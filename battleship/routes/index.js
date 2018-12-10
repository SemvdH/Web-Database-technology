var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("splash.html", {root: "./public"});
});

// pressing play button returns game page
router.get("/play", function(req, res, next) {
  res.sendFile("game.html", {root: "./public"});
});

//log each request made to server
router.use(function(req, res, next) {
  console.log('[LOG] %s\t%s\t%s\t%s', new Date().toISOString(), req.connection.remoteAddress,
      req.method, req.url);
  next(); // call on to next component
});

module.exports = router;
