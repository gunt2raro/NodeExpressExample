var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render( 'index', { title: 'Api Hub político!!!' });
});

module.exports = router;
