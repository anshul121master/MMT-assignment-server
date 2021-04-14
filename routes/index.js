var express = require('express');
var router = express.Router();
const hotelsList = require('../data/hotels.json')

/* GET registered hotels */
router.get('/', function(req, res, next) {
  res.json(hotelsList);
});

module.exports = router;
