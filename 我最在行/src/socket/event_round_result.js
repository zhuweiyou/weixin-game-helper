const QuestionModel = require('../database/question-model')

module.exports = (socket, data) => {
  // 两个人题目一样，所以只要大号记就好
  if (socket.master) {
    // 组合题目和答案，入库
    socket._question.answer = data.results.answer
    new QuestionModel(socket._question).save()
    console.log('保存到题库', JSON.stringify(socket._question))

    // 下一题的题目，也一块返回了。和 event_battle_start 一样，暂存内存
    socket._question = {
      question: data.question,
      options: data.options
    }
  }
}

