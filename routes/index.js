var express = require('express');
var discordJs = require('../bin/bot.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("INTERFACE BILLIEBOT");
});

/* GET home page. */
router.delete('/', function(req, res, next) {
  res.send("INTERFACE BILLIEBOT");
});

module.exports = router;
