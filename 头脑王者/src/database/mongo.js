const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/tnwz', {
  useMongoClient: true,
  autoReconnect: true
})

db.once('open', () => console.log('连接数据库成功'))

module.exports = db
