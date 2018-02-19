const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/zhdtw', {
  useMongoClient: true,
  autoReconnect: true
})

db.once('open', () => console.log('连接数据库成功'))
db.on('error', err => console.error(err))

module.exports = db
