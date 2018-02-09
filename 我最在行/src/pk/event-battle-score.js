module.exports = (socket, data) => {
  // 出了分数，下一局准备
  socket.send({event: 'event_ready'})
}
