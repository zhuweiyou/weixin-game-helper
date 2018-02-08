const QuestionModel = require('../common/question_model')
const event_battle_start = require('./event_battle_start')

module.exports = async (socket, data) => {
  // 两个人题目一样，所以只要大号记就好
  if (socket.master) {
    if (await QuestionModel.findOne({question: socket._question.question})) {
      console.log('题库已有，不再入库')
    } else {
      // 组合题目和答案，入库
      socket._question.answer = data.results.answer
      console.log('保存到题库', JSON.stringify(await new QuestionModel(socket._question).save()))
    }
  }

  // 除了返回结果，也会同时返回下一题的题目，处理方式跟 star 一致
  event_battle_start(socket, data)
}

