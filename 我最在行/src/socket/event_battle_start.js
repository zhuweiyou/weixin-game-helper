module.exports = (socket, data) => {
  // 两个人题目一样，所以只要大号记就好
  if (socket.master) {
    // 先暂存到内存中，等返回答案后，一块存数据库
    this._question = {
      question: data.question,
      options: data.options
    }
  }
}
