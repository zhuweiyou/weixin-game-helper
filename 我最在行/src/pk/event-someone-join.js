module.exports = (socket, data) => {
  // 两个人都进来了，点准备
  if (data.players.length === 2) {
    socket.send({event: 'event_ready'})
  }
}
