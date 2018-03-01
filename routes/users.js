var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({user: 'duvan monsa'});
});

module.exports = router;
