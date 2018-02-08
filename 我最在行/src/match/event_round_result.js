const QuestionModel = require('../common/question-model')
const event_battle_start = require('./event_battle_start')

module.exports = async (socket, data) => {
  // 如果题库没有，组合题目和答案，入库
  if (!await QuestionModel.findOne({question: socket._question.question})) {
    socket._question.answer = data.results.answer
    console.log('保存到题库', JSON.stringify(await new QuestionModel(socket._question).save()))
  }

  // 除了返回结果，也会同时返回下一题的题目，处理方式跟 star 一致
  await event_battle_start(socket, data)
}

