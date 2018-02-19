const eventbus = require('./eventbus')

module.exports = (socket, data) => {
  // 出了分数，结束一局
  console.log('单局匹配结束')
  eventbus.emit('over')
}
