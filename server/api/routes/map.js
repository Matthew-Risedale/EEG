const router = require('express').Router();
const MAP = require('./map.json');

console.log(MAP);

router.route('/map')
  .get(function (req, res) { 
    res.send(MAP.map);
  })

module.exports = router;
