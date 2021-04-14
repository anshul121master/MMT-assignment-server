var express = require('express');
var router = express.Router();
const bookings = require('../data/bookings.json')

/* GET users listing. */
router.post('/', function(req, res, next) {
  const hotelId = req.body.bookingDetails.hotelId;
  bookings.forEach(booking => {
    if(booking.hotelId === hotelId){
      booking.bookings.push(req.body)
    }
  })
  res.sendStatus(200);
}).get('/', (req, res, next) => {
  const presentBookings = bookings.filter(booking => booking.bookings.length !== 0)
  res.json(presentBookings)
});

module.exports = router;
