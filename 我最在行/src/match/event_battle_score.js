const eventbus = require('./eventbus')

module.exports = (socket, data) => {
  // 出了分数，结束一局
  console.log('单局匹配结束')

  // 因为模块之间不能循环引用，所以通过事件通知开局
  eventbus.emit('start')
}
