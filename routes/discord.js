var express = require('express');
var discordJs = require('../bin/bot.js');

var router = express.Router();


/* GET home page. */
router.get('/stop', function(req, res, next) {
  discordJs.stop();
  res.send("STOP Bot discord");
});
/* GET home page. */
router.get('/start', function(req, res, next) {
    discordJs.start();
    res.send("start bot !!");
  });

/* GET home page. */
router.get('/status', function(req, res, next) {
  res.send('Le bot est démarré : '+discordJs.config.isStarted);
});
module.exports = router;
