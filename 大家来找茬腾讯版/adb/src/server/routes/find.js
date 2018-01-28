var express = require('express')
var router = express.Router()
var find = require('../../find')

router.get('/', async (req, res, next) => {
  var {buffer} = await find()
  res.send(buffer)
})

module.exports = router
