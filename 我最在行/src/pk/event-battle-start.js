module.exports = (socket, data) => {
  // 先暂存到内存中，等返回答案后，一块存数据库
  socket._question = {
    question: data.question,
    options: data.options
  }

  // 两个号都随便选个答案
  socket.send({
    event: 'event_choice',
    choice: 0
  })
}
