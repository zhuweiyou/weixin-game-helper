const QuestionModel = require('../common/question-model')

module.exports = async (socket, data) => {
  // 两个人题目一样，所以只要大号记就好
  if (socket.master) {
    // 组合题目和答案，入库
    socket._question.answer = data.results.answer

    if (await QuestionModel.findOne({question: socket._question.question})) {
      console.log('题库已有，不再入库')
    } else {
      console.log('保存到题库', JSON.stringify(await new QuestionModel(socket._question).save()))
    }

    // 下一题的题目，也一块返回了。和 event_battle_start 一样，暂存内存
    socket._question = {
      question: data.question,
      options: data.options
    }
  }

  // 两个号都随便选个答案
  socket.send({
    event: 'event_choice',
    choice: 0
  })
}

