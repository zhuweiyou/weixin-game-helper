const QuestionModel = require('../common/question_model')
const random = require('../common/random')

module.exports = async (socket, data) => {
  // 从题库找答案
  const one = await QuestionModel.findOne({question: data.question})
  if (!one) {
    // 没答案，把题目先暂存到内存中，等返回答案后，一块存数据库
    socket._question = {
      question: data.question,
      options: data.options
    }
  }

  // 题库有答案就用，没答案就随机一个
  socket.send({
    event: 'event_choice',
    // 答题时，选项顺序可能会打乱，所以要找一下正确答案文字对应的索引值
    choice: one ? data.options.find(option => one.options[one.answer] === option) : random(0, 3)
  })
}
