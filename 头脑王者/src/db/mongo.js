const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/tnwz', {
  useMongoClient: true,
  autoReconnect: true
})
