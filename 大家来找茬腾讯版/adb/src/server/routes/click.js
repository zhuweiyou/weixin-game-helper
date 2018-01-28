var express = require('express')
var click = require('../../click')
var router = express.Router()

router.post('/', async (req, res, next) => {
  var {x, y} = req.body
  await click(x, y)
  res.send({x, y})
})

module.exports = router
